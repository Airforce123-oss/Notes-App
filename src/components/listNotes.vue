<template>
  <div class="listNotes">
    <ul class="list-none p-0 m-0">
      <li v-for="(row, index) in propNotes" :key="index">
        <button
          class="w-full h-[150px] text-left border-b border-gray-300 px-4 py-2 cursor-pointer outline-none bg-gray-100 hover:bg-gray-200"
          @click="handleClick(row.id)"
        >
          <label class="block text-gray-700 text-xl mb-3">
            {{ row.title }} {{ index + 1 }}
          </label>
          <span class="text-gray-600">
            {{ row.description }}
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// ✅ Definisikan props yang diterima dari parent
const props = defineProps({
  propNotes: {
    type: Array,
    required: true,
  },
  propEditNotes: {
    type: Function,
    required: true,
  },
});

// ✅ Fungsi untuk klik note
const handleClick = (id) => {
  props.propEditNotes(id);
};
</script>
