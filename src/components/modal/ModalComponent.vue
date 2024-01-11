<template>
  <!-- Modal toggle -->
  <button
    :dataTestId="dataTestId"
    :data-modal-target="id"
    :data-modal-toggle="id"
    class="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    {{ label }}
  </button>

  <!-- Main modal -->
  <div
    :id="id"
    tabindex="-1"
    aria-hidden="true"
    class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
  >
    <div class="relative max-h-full w-full max-w-2xl p-4">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5"
        >
          <h3
            v-if="props.title !== null"
            class="text-xl font-semibold text-gray-900 dark:text-white"
          >
            {{ title }}
          </h3>
          <button
            type="button"
            class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            :data-modal-hide="id"
          >
            <svg
              class="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="space-y-4 p-4 md:p-5">
          <slot></slot>
        </div>
        <!-- Modal footer
        <div
          class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            data-modal-hide="modal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            I accept
          </button>
          <button
            data-modal-hide="modal"
            type="button"
            class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Decline
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface, InstanceOptions, modalPlacement } from "flowbite";
import { onMounted, watch } from "vue";

const props = defineProps<{
  dataTestId?: string;
  id: string;
  title?: string;
  label?: string;
  isOpen?: boolean;
}>();

const emit = defineEmits(["modal:closed", "modal:opened"]);

let modal: ModalInterface;

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      modalShow();
    } else {
      modalHide();
    }
  },
);

onMounted(() => {
  const target = document.getElementById(props.id);

  const placement: modalPlacement = "center";
  const options: ModalOptions = {
    placement,
    backdrop: "static",
    backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-[60]",
    closable: true,
    onHide: () => {
      emit("modal:closed");
    },
    onShow: () => {
      emit("modal:opened");
    },
  };

  const instanceOptions: InstanceOptions = {
    id: props.id,
    override: true,
  };

  modal = new Modal(target, options, instanceOptions);

  if (props.isOpen) {
    modalShow();
  } else {
    modalHide();
  }
});

function modalShow() {
  modal.show();
}

function modalHide() {
  modal.hide();
}
</script>
