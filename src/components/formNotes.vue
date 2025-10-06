<template>
  <div class="formNotes p-6 bg-white rounded-xl shadow-md flex flex-col gap-6">
    <form @submit.prevent="submitNotes">
      <!-- Menu -->
      <div class="flex justify-end gap-3">
        <button
          type="button"
          class="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          @click="$emit('delete-note')"
        >
          Delete
        </button>
        <button
          type="submit"
          class="px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition"
        >
          Save
        </button>
      </div>
    </form>

    <!-- Content -->
    <div class="content flex flex-col gap-4">
      <input
        type="text"
        class="title text-2xl font-semibold border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Judul catatan..."
        v-model="note.title"
      />
      <textarea
        class="body border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
        placeholder="Isi catatan..."
        rows="10"
        v-model="note.description"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";

// ✅ Props
const props = defineProps({
  propSaveNotes: {
    type: Function,
    required: true,
  },
  propDataForm: {
    type: Object,
    default: () => ({}),
  },
});

// ✅ Emit (untuk tombol Delete)
const emit = defineEmits(["delete-note"]);

// ✅ Reactive data
const note = reactive({
  title: "",
  description: "",
});

// ✅ Watch agar form otomatis terisi saat edit
watch(
  () => props.propDataForm,
  (newVal) => {
    if (newVal && (newVal.title || newVal.description)) {
      note.title = newVal.title || "";
      note.description = newVal.description || "";
    }
  },
  { immediate: true, deep: true }
);

// ✅ Submit handler
function submitNotes() {
  props.propSaveNotes({ ...note });

  // reset form setelah disimpan
  note.title = "";
  note.description = "";
}
</script>
