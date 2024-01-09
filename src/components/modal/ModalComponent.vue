<template>
  <!-- Modal toggle -->
  <button
    :data-modal-target="id"
    :data-modal-toggle="id"
    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    {{ label }}
  </button>

  <!-- Main modal -->
  <div
    :id="id"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3
            v-if="props.title !== null"
            class="text-xl font-semibold text-gray-900 dark:text-white"
          >
            {{ title }}
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            :data-modal-hide="id"
          >
            <svg
              class="w-3 h-3"
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
        <div class="p-4 md:p-5 space-y-4">
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