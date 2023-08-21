<script setup lang="ts">
import { enumIlnessTime } from "@/enums";
import { ref } from "vue";
import { apiPostUpload } from "@/services/rapidConsultation";
import type {
  UploaderAfterRead,
  UploaderFileListItem,
} from "vant/lib/uploader/types";
import { computed } from "vue";
import { showToast } from "vant";
import { useRapidConsult } from "@/stores";
import type { partialPatientInformation } from "@/types/rapidConsultation";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const optionList = [
  {
    label: "一周内",
    value: enumIlnessTime.week,
  },
  {
    label: "一月内",
    value: enumIlnessTime.months,
  },
  {
    label: "半年内",
    value: enumIlnessTime.halfYear,
  },
  {
    label: "半年以上",
    value: enumIlnessTime.year,
  },
];
const consultFlagList = [
  {
    label: "未就诊",
    value: 0,
  },
  {
    label: "就诊过",
    value: 1,
  },
];

const illnessDsp = ref<partialPatientInformation>({
  illnessTime: 1,
  consultFlag: 0,
  illnessDesc: "",
  pictures: [],
});
const fileList = ref<
  {
    id: string;
    url: string;
  }[]
>([]);
const store = useRapidConsult();
const router = useRouter();

// 上传图片
const onAfterRead: UploaderAfterRead = async (item) => {
  if (Array.isArray(item)) return;
  if (!item.file) return;
  item.status = "uploading";
  item.message = "上传中...";
  apiPostUpload(item.file)
    .then((res) => {
      console.log("上传成功");
      illnessDsp.value.pictures?.push(res.data);
      item.url = res.data.url; //删除时用
      item.status = "done";
      item.message = "上传成功";
    })
    .catch(() => {
      console.log("上传失败");
      item.status = "failed";
      item.message = "上传失败";
    });
};

const ondelete = (item: UploaderFileListItem) => {
  console.log("删除了");
  illnessDsp.value.pictures = illnessDsp.value.pictures?.filter(
    (i) => item.url !== i.url
  );
};
const disabled = computed(() => {
  return !illnessDsp.value.illnessDesc;
});
const next = () => {
  if (!illnessDsp.value.illnessDesc) {
    return showToast("请输入病情描述");
  }
  store.setInquiriesImagesText(illnessDsp.value);
  router.push("/user/familyArchives?isChange=1");
};
onMounted(() => {
  // 回退时回显数据
  if (store.patientInformation.illnessDesc) {
    const { illnessTime, consultFlag, illnessDesc, pictures } =
      store.patientInformation;
    illnessDsp.value.illnessTime = illnessTime;
    illnessDsp.value.consultFlag = consultFlag;
    illnessDsp.value.illnessDesc = illnessDesc;
    fileList.value = pictures || [];
  }
});
</script>

<template>
  <div class="consult-illness-page">
    <ReNavBar title="图文问诊" />
    <!-- 医生提示 -->
    <div class="illness-tip van-hairline--bottom">
      <img class="img" src="@/assets/avatar-doctor.svg" />
      <div class="info">
        <p class="tit">在线医生</p>
        <p class="tip">
          请描述你的疾病或症状、是否用药、就诊经历，需要我听过什么样的帮助
        </p>
        <p class="safe">
          <cp-icon name="consult-safe" /><span>内容仅医生可见</span>
        </p>
      </div>
    </div>
    <!-- 收集信息 -->
    <div class="illness-form">
      <van-field
        type="textarea"
        rows="3"
        v-model="illnessDsp.illnessDesc"
        placeholder="请详细描述您的病情，病情描述不能为空"
      ></van-field>
      <div class="item">
        <p>本次患病多久了？</p>
        <CpRadioBtn
          :optionList="optionList"
          v-model="illnessDsp.illnessTime"
        ></CpRadioBtn>
      </div>
      <div class="item">
        <p>此次病情是否去医院就诊过?{{ illnessDsp.pictures?.length }}</p>
        <CpRadioBtn
          :optionList="consultFlagList"
          v-model="illnessDsp.consultFlag"
        ></CpRadioBtn>
      </div>
      <!-- 上传组件 -->
      <div class="illness-img">
        <van-uploader
          upload-text="上传图片"
          upload-icon="photo-o"
          max-count="9"
          max-size="5*1024*1024"
          v-model="fileList"
          :after-read="onAfterRead"
          @delete="ondelete"
        ></van-uploader>
        <p class="tip" v-if="fileList.length <= 0">
          上传内容仅医生可见,最多9张图,最大5MB
        </p>
      </div>

      <van-button
        :class="{ disabled }"
        @click="next"
        type="primary"
        block
        round
      >
        下一步
      </van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.consult-illness-page {
  padding-top: 46px;
  .van-button {
    font-size: 16px;
    margin-bottom: 30px;
    margin-top: 50px;
    &.disabled {
      opacity: 1;
      background: #fafafa;
      color: #d9dbde;
      border: #fafafa;
    }
  }
}
.illness-tip {
  display: flex;
  padding: 15px;
  .img {
    width: 52px;
    height: 52px;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 10px;
  }
  .info {
    flex: 1;
    padding-left: 12px;
    .tit {
      font-size: 16px;
      margin-bottom: 5px;
    }
    .tip {
      padding: 12px;
      background: var(--cp-bg);
      color: var(--cp-text3);
      font-size: 13px;
      margin-bottom: 10px;
    }
    .safe {
      font-size: 10px;
      color: var(--cp-text3);
      display: flex;
      align-items: center;
      .cp-icon {
        font-size: 12px;
        margin-right: 2px;
      }
    }
  }
}
.illness-form {
  padding: 15px;
  .van-field {
    padding: 0;
    &::after {
      border-bottom: none;
    }
  }
  .item {
    > p {
      color: var(--cp-text3);
      padding: 15px 0;
    }
  }
  .illness-img {
    padding-top: 16px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    .tip {
      font-size: 12px;
      color: var(--cp-tip);
    }
    ::v-deep() {
      .van-uploader {
        &__preview {
          &-delete {
            left: -6px;
            top: -6px;
            border-radius: 50%;
            background-color: var(--cp-primary);
            width: 20px;
            height: 20px;
            &-icon {
              transform: scale(0.9) translate(-22%, 22%);
            }
          }
          &-image {
            border-radius: 8px;
            overflow: hidden;
          }
        }
        &__upload {
          border-radius: 8px;
        }
        &__upload-icon {
          color: var(--cp-text3);
        }
      }
    }
  }
}
</style>
