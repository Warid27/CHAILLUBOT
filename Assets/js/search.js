const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

// Disable Enter key submit on the form
function disableEnter(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent the default action (form submission)
    return false;
  }
}

// Search Data
const searchDataHTML = `
<div class="ChatGPT">
    <a href="konten_chatGPT.html#ChatGPT">Bayangkan butuh jawaban cepat tapi malas browsing. ChatGPT itu kayak teman pintar yang siap jawab apa aja dengan jelas. Cukup ketik pertanyaan, dan langsung dapat jawaban yang gampang dimengerti. Gak perlu repot, semua jadi lebih mudah!</a>
    <a href="konten_chatGPT.html#section-1">ChatGPT adalah model bahasa berbasis AI yang dikembangkan oleh OpenAI. Model ini dirancang untuk meniru percakapan manusia dan dapat digunakan untuk berbagai aplikasi seperti layanan pelanggan, pembuatan konten, penelitian, dan pembelajaran otomatis. ChatGPT memanfaatkan teknologi pemrosesan bahasa alami (NLP) untuk memahami dan merespons teks secara cerdas, memungkinkan interaksi yang lebih alami dan efektif dengan pengguna. Model Bahasa AI: Sebuah sistem kecerdasan buatan yang dilatih untuk memahami dan menghasilkan teks dalam berbagai bahasa, termasuk bahasa Indonesia. Berbasis GPT-4: Versi terbaru dari model GPT, dilatih dengan data teks dari internet untuk memahami pola bahasa. Aplikasi Percakapan: Dirancang untuk percakapan interaktif, memungkinkan interaksi seolah berbicara dengan manusia. Penyempurnaan Konteks: ChatGPT dapat mengingat dan mengaitkan konteks dari percakapan sebelumnya, membuat percakapan lebih kohesif.</a>
    <a href="konten_chatGPT.html#Paket_ChatGPT">Paket ChatGPT Tapi, untuk menikmati ChatGPT sepenuhnya, kamu harus berlangganan dengan biaya $20 atau sekitar Rp 310.000 per bulan. Eits, jangan sedih dulu! ChatGPT juga menyediakan versi gratisnya. Meski fitur yang bisa kamu akses terbatas, seperti hanya bisa menggunakan ChatGPT dengan kapasitas dan akses terbatas, tapi cukup untuk sekadar mencoba dan merasakan fungsinya. Yuk, kita lihat lebih detail paket-paket ChatGPT yang bisa kamu pilih: Paket Dasar: Gratis!!! Akses ke versi dasar ChatGPT dengan batasan penggunaan tertentu. Cocok buat yang baru coba-coba atau yang butuh bantuan sesekali. Paket Pro: $20 / Bulan. Akses ke model yang lebih canggih, kecepatan respons yang lebih cepat, dan prioritas dalam antrian. Ideal untuk pengguna yang sering membutuhkan bantuan atau yang ingin kualitas interaksi yang lebih tinggi. Paket Team: $30 / User / Bulan. Kolaborasi, manajemen akun yang lebih fleksibel, dan dukungan pelanggan yang lebih intensif. Cocok untuk tim atau perusahaan yang memerlukan integrasi dalam alur kerja mereka.</a>
    <a href="konten_chatGPT.html#Cara_Menggunakan_ChatGPT">Cara Menggunakan ChatGPT Daftar di Situs Web OpenAI: Pertama-tama, kunjungi situs web OpenAI atau platform yang menawarkan ChatGPT. Daftar atau buat akun dengan menggunakan email atau media sosial. Login dan Pilih Model: Setelah berhasil membuat akun, masuklah ke akun Anda dan pilih model ChatGPT yang ingin digunakan. Anda bisa memilih model sesuai kebutuhan atau preferensi Anda. Mulai Percakapan: Mulai percakapan dengan mengetik pertanyaan atau perintah di kotak dialog. ChatGPT akan memberikan respons secara real-time berdasarkan input yang Anda berikan. Pengaturan dan Plugin: Sesuaikan pengaturan sesuai preferensi Anda, seperti bahasa, gaya percakapan, atau fokus topik. Anda juga dapat mengintegrasikan plugin dan ekstensi untuk menambah kemampuan ChatGPT.</a>
    <a href="konten_chatGPT.html#User_ChatGPT">Penggunaan ChatGPT Asisten Virtual: ChatGPT bisa jadi asisten virtual andalan! Bantu kamu menemukan informasi, menyelesaikan tugas, dan memberikan dukungan teknis dengan cepat dan efisien. Pendidikan dan Pembelajaran: Untuk guru dan siswa yang butuh bantuan tambahan, ChatGPT siap menjelaskan konsep-konsep sulit, membantu mengerjakan tugas, dan memberikan materi pembelajaran tambahan. Layanan Pelanggan: Perusahaan bisa mengandalkan ChatGPT untuk meningkatkan layanan pelanggan dengan memberikan jawaban cepat dan akurat untuk berbagai pertanyaan umum. Kreativitas dan Penulisan: Bagi penulis yang butuh ide-ide segar, ChatGPT bisa bantu brainstorming, penulisan draf, dan revisi konten dengan cara yang kreatif.</a>
    <a href="konten_chatGPT.html#Keuntungan_ChatGPT">Berikut adalah teks informasi yang disederhanakan setelah menghapus elemen HTML lainnya: Keuntungan Menggunakan ChatGPT Akses Cepat: Informasi cepat tentang berbagai topik. Kreativitas: Menawarkan ide-ide kreatif dan konten. Bantuan Akademik: Pembelajaran dan bantuan tugas. Fleksibilitas: Berbagai keperluan dari menulis email hingga saran desain. 24/7: Akses kapan saja dan dari mana saja. Adaptasi: Disesuaikan dengan kebutuhan spesifik Anda.</a>
</div>
<div class="SunoAI">
    <a href="konten_suno.html#Suno">Bayangkan kamu lagi gabut, tiba-tiba ingin jadi produser musik terkenal tanpa harus belajar not balok atau main alat musik. Nah, Suno AI hadir seperti malaikat penolong di tengah kebosananmu!</a>
    <a href="konten_suno.html#section-1">Suno AI adalah alat pembuatan musik berbasis kecerdasan buatan generatif yang diluncurkan pada Desember 2023. Ini adalah program yang membantu pengguna menciptakan lagu-lagu realistis yang dapat menggabungkan vokal dan instrumentasi atau menghasilkan musik instrumental sepenuhnya. Suno AI juga dapat digunakan sebagai plugin di Microsoft Copilot. Meskipun kumpulan data yang digunakan untuk pelatihan tidak diungkapkan, Suno AI mengklaim bahwa data tersebut bebas dari masalah plagiarisme dan hak cipta. Fitur Utama: Pembuatan Lagu Otomatis: Menghasilkan lagu dari petunjuk teks dengan opsi vokal, instrumental, atau kombinasi keduanya. Integrasi dengan Microsoft Copilot: Plugin di Microsoft Copilot untuk integrasi langsung dalam aplikasi Microsoft. Personalisasi Musik: Menyesuaikan genre, tempo, dan gaya musik sesuai preferensi pengguna. Library: Menyimpan, mengorganisir, dan mengakses semua lagu dan proyek yang dibuat.</a>
    <a href="konten_suno.html#Paket_Suno">Paket Suno AI Tapi, untuk menikmati Suno AI sepenuhnya, kamu harus berlangganan dengan biaya $24 atau sekitar Rp 380.000 per bulan. Eits, jangan sedih dulu! Suno AI juga menyediakan versi gratisnya. Meski fitur yang bisa kamu akses terbatas, seperti cuma bisa bikin 10 lagu sehari, tapi lumayanlah buat sekadar coba-coba. Yuk, kita lihat lebih detail paket Suno AI yang bisa kamu pilih: Paket Dasar: Gratis!!! Akses lima lagu dalam dua versi berbeda. Cocok buat yang suka gratisan. Paket Pro: $10 / Bulan atau $96 / Tahun. Bisa akses 250 lagu dalam dua versi berbeda. Buat yang mulai serius tapi belum mau jor-joran. Paket Premier: $30 / Bulan atau $288 / Tahun. Bisa akses 1000 lagu dalam dua versi berbeda. Buat yang pengen jadi sultan musik instan.</a>
    <a href="konten_suno.html#Cara_Menggunakan_Suno">Cara Menggunakan Suno AI Masuk Situs Suno AI: Pertama-tama, kunjungi situs resmi Suno AI. Bikin atau daftar akun pakai Google atau media sosial. Pas sudah masuk, kamu akan disambut berbagai pilihan paket langganan, mulai dari gratis sampai berbayar tiap bulan. Buat Musik: Setelah bikin akun, langsung aja buat musik yang kamu mau. Caranya gampang, cukup ketik prompt text dengan beberapa indikator seperti Genre Musik, Jenis Suara, Bahasa, dan Efek. Tunggu Hingga Selesai: Setelah mengisi prompt text sesuai indikator yang ada, tekan tombol "Create" dan tunggu beberapa saat sampai proses pembuatan lagu selesai. Lamanya proses tergantung dari seberapa panjang prompt text yang kamu ketik. Simpan Hasilnya: Terakhir, simpan hasil lagunya. Sebelum menyimpan, kamu bisa preview dulu buat memastikan lagu sudah sesuai. Kalau belum puas, ulangi lagi prompt text-nya sampai ketemu yang cocok. Kalau sudah oke, langsung simpan di perangkatmu.</a>
    <a href="konten_suno.html#User_Suno">Suno AI untuk Siapa Saja? Musisi Independen: Untuk para musisi yang nggak punya akses ke studio mahal atau musisi sesi, Suno adalah penyelamat! Dengan Suno, kamu bisa bikin backing track, coba-coba berbagai suara, dan bahkan dapet inspirasi buat melodi dan lirik. Artis Berpengalaman: Bahkan musisi yang sudah lama berkecimpung di dunia musik bisa dapet manfaat dari Suno. Bisa memicu ide kreatif, bantu jelajah genre baru, dan jadi platform untuk prototipe cepat konsep musik. Pembuat Film dan Video: Cari musik yang pas buat film atau video itu bisa makan waktu dan biaya. Suno bikin kamu bisa bikin soundtrack custom yang cocok banget dengan mood dan nuansa proyekmu. Pengembang Game: Pengembang game juga bisa pakai Suno buat bikin soundtrack dinamis dan imersif buat game mereka.</a>
    <a href="konten_suno.html#Keuntungan_Suno">Keuntungan Menggunakan Suno AI Efisiensi: Otomatisasi proses bisnis untuk meningkatkan produktivitas. Pengambilan Keputusan: Analisis data mendalam untuk keputusan berbasis informasi. Skalabilitas: Menyesuaikan kapasitas dan fitur sesuai kebutuhan. Kustomisasi: Opsi kustomisasi untuk berbagai ukuran perusahaan. Efisien & Efektif: Hemat waktu dan biaya dengan mengurangi tenaga kerja manual. Keamanan Data: Melindungi data dengan sistem keamanan canggih.</a>
</div>
<div class="QuillBot">
    <a href="konten_quillbot.html#QuillBot">Bayangkan kamu lagi butuh bantuan menulis, tiba-tiba pengen banget punya asisten penulisan yang keren tanpa harus ribet. Nah, QuillBot hadir seperti sahabat setia di tengah kebingunganmu!</a>
    <a href="konten_quillbot.html#section-1">Quillbot Quillbot adalah asisten penulisan online yang diluncurkan pada tahun 2017. Ini adalah alat yang membantu pengguna dalam parafrase, memeriksa tata bahasa, mendeteksi plagiarisme, dan menerjemahkan teks ke berbagai bahasa. Dengan rata-rata 99,6 juta kunjungan bulanan pada Februari 2024, QuillBot telah lama diakui sebagai alat penulisan AI yang andal. Fitur Utama: Parafrase: Mengungkapkan kembali ide dengan bahasa dan struktur kalimat yang berbeda. Grammar-check: Memeriksa dan memperbaiki kesalahan ejaan, tanda baca, dan tata bahasa. Summarizer: Merangkum teks panjang menjadi lebih singkat sambil mempertahankan inti penting. AI Detector: Menganalisis teks untuk mendeteksi pola khas konten yang dihasilkan AI.</a>
    <a href="konten_quillbot.html#Paket_QuillBot">Paket QuillBot Untuk menikmati QuillBot sepenuhnya, kamu harus berlangganan dengan biaya $9.95 atau sekitar Rp 154.000 per bulan. Namun, QuillBot juga menyediakan versi gratis dengan fitur dasar. Berikut detail paket-paket yang bisa kamu pilih: 1. Paket Gratis Biaya: Gratis Fitur: Akses dasar seperti parafrase dan pemeriksaan tata bahasa. Cocok untuk penggunaan ringan dan mencoba fitur dasar. 2. Paket Premium Biaya: $9.95 / Bulan atau $119.4 / Tahun Fitur: Akses ke fitur premium dengan kemampuan lebih lengkap seperti parafrase canggih dan pemeriksaan tata bahasa mendalam. Ideal untuk pengguna yang membutuhkan lebih banyak alat dan fleksibilitas. 3. Paket Ultimate Biaya: $3.75 / Bulan / User atau $44.95 / Tahun / User Fitur: Akses lengkap ke semua fitur premium dan tambahan eksklusif. Cocok untuk pengguna yang membutuhkan alat paling komprehensif dan dukungan penuh.</a>
    <a href="konten_quillbot.html#Cara_Menggunakan_QuillBot">Cara Menggunakan QuillBot Masuk Situs QuillBot Kunjungi situs resmi QuillBot atau download aplikasinya. Daftar atau buat akun dengan Google atau media sosial. Setelah masuk, kamu akan melihat berbagai fitur yang tersedia. Pilih Fitur Pilih fitur yang kamu inginkan, seperti QuillBot Grammar atau QuillBot Indonesia. Masukkan teks atau dokumen yang ingin diperiksa atau diubah. Pilih opsi tambahan seperti bahasa dan mode parafrase. Tunggu Hingga Selesai Setelah memilih bahasa dan mode, tekan tombol “Quill It!” atau "Paraphrase" dan tunggu hingga proses selesai. Waktu proses tergantung pada panjang teks yang dimasukkan. Simpan Hasilnya Setelah parafrase selesai, preview hasilnya untuk memastikan bahwa hasilnya sesuai. Jika perlu, sesuaikan mode parafrase hingga puas. Simpan hasil akhir di perangkatmu.</a>
    <a href="konten_quillbot.html#User_QuillBot">QuillBot untuk Siapa Saja? Pelajar QuillBot membantu pelajar menyelesaikan tugas penulisan dengan lebih mudah, memparafrase teks dari referensi, dan meningkatkan kualitas tulisan akademis. Penulis Penulis profesional bisa menggunakan QuillBot untuk memperbaiki tata bahasa, meningkatkan kejelasan teks, dan menghasilkan ide kreatif untuk artikel, cerita, atau konten lainnya. Peneliti Peneliti memanfaatkan QuillBot untuk memparafrase teks dari literatur akademik, meringkas artikel, dan memastikan tulisan bebas dari plagiarisme. Profesional QuillBot membantu profesional menulis email, laporan, dan dokumen penting dengan cepat dan efisien, sambil menjaga keakuratan tata bahasa dan penyampaian pesan.</a>
    <a href="konten_quillbot.html#Keuntungan_QuillBot">Keuntungan Menggunakan QuillBot Mudah Digunakan Antarmuka sederhana yang mudah dipahami. Bahasa Indonesia Mendukung Bahasa Indonesia untuk kenyamanan pengguna lokal. Akses Gratis Versi gratis dengan fitur dasar yang cukup. Aplikasi Mobile Aplikasi Android untuk akses di perangkat mobile. Ekstensi dan Integrasi Ekstensi untuk Chrome dan Microsoft Word serta integrasi dengan berbagai aplikasi. Keamanan Sistem keamanan yang baik untuk penggunaan yang aman.</a>
</div>
`;

if (searchInput && searchResult) {
  searchInput.addEventListener("input", function () {
    const query = this.value.trim();
    if (!query) {
      searchResult.innerHTML = null;
      return;
    }

    // Fungsi untuk menyoroti teks yang sesuai dengan query
    function highlightText(text, query) {
      const regex = new RegExp(`(${query})`, "gi");
      return text.replace(regex, "<mark class='highlight'>$1</mark>");
    }

    function searchAndDisplayResults(query) {
      searchResult.innerHTML = ""; // Menghapus elemen HTML yang ada di searchResult

      // Mengubah string HTML menjadi DOM element
      const parser = new DOMParser();
      const doc = parser.parseFromString(searchDataHTML, "text/html");

      let resultsFound = false;

      doc.querySelectorAll("div").forEach((div) => {
        const links = div.querySelectorAll("a");
        let divContent = "";

        links.forEach((link) => {
          const text = link.textContent;
          if (text.toLowerCase().includes(query.toLowerCase())) {
            resultsFound = true;
            const snippet = highlightText(
              text.substring(0, 200) + (text.length > 200 ? "..." : ""),
              query
            ); // Ambil potongan teks dan highlight
            divContent += `<p><a href="${link.href}">${snippet}</a></p>`;
          }
        });

        if (divContent) {
          searchResult.innerHTML += `<div class="${div.className}">${divContent}</div>`;
        }
      });

      if (!resultsFound) {
        searchResult.innerHTML =
          "<div class='wrongSearch'><p>Ooops.....</p></div>";
      }
    }

    searchAndDisplayResults(query);
  });

  // Disable Enter key submit
  searchInput.addEventListener("keydown", disableEnter);
}
