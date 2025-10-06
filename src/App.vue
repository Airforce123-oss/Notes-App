<template>
  <div
    id="app"
    class="flex w-full h-screen font-sans text-[#2c3e50] overflow-hidden bg-gray-50"
  >
    <!-- Sidebar kiri -->
    <div
      class="w-[350px] bg-gradient-to-b from-gray-100 to-gray-200 text-[#444] flex flex-col shadow-lg"
    >
      <!-- Logo -->
      <div class="px-6 py-6 border-b border-gray-300 flex items-center">
        <a
          href="https://wegodev.com"
          target="_blank"
          rel="noopener"
          class="no-underline flex items-center space-x-2"
        >
          <h2 class="text-3xl font-bold text-gray-700">Wegodev</h2>
          <span class="text-xs tracking-widest uppercase text-green-600">
            Notes
          </span>
        </a>
      </div>

      <!-- Frame Notes -->
      <div class="overflow-y-scroll flex-1 px-4 py-4 space-y-4">
        <button
          @click="newNotes"
          class="w-full py-3 px-4 text-sm font-semibold rounded-lg bg-green-500 text-white shadow hover:bg-green-600 hover:scale-[1.02] transition"
        >
          + Note Baru
        </button>

        <!-- List catatan -->
        <ListNotes :propNotes="notes" :propEditNotes="editNote" />
      </div>

      <!-- Footer -->
      <div class="px-6 py-4 border-t border-gray-300 text-xs text-gray-500">
        © 2025 Wegodev
      </div>
    </div>

    <!-- Konten kanan -->
    <div class="flex-1 overflow-y-scroll bg-white p-6">
      <!-- Form Notes -->
      <FormNotes :propSaveNotes="saveNote" />
    </div>
  </div>
</template>

<script>
import ListNotes from "./components/listNotes.vue";
import FormNotes from "./components/formNotes.vue";

export default {
  name: "App",
  data: function () {
    return {
      notes: [
        {
          id: 1,
          title: "Catatan Harian Pagi Ini",
          description:
            "Menuliskan rencana dan prioritas kerja untuk hari ini. Fokus utama adalah menyelesaikan desain antarmuka aplikasi catatan digital",
        },
        {
          id: 2,
          title: "Ide Proyek Wegodev",
          description:
            "Konsep awal pengembangan fitur catatan berbasis cloud dengan sinkronisasi otomatis antara perangkat desktop dan mobile.",
        },
      ],
    };
  },
  components: {
    ListNotes,
    FormNotes,
  },
  methods: {
    newNotes() {
      alert("Buat note baru!");
    },
    editNote(id) {
      console.log("Edit note dengan ID:" + id);
    },
    saveNote(note) {
      let newNote = {
        title: note.title,
        description: note.description,
      };
      this.notes.push(newNote);
      console.log("Notes saved:", newNote);
    },
  },
};
</script>

<style>
/* Scrollbar custom */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #b5b5b5;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
