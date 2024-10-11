// Tailwind configuration for font extension
tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
      }
    }
  }
  
  // Data for tourist spots in Malang
  const placesMalang = [
    {
      id: 'modal1',
      title: 'Alun-Alun Kota Malang',
      shortDescription: 'Pusat keramaian dengan taman hijau.',
      description: 'Alun-Alun Kota Malang adalah pusat keramaian dan tempat rekreasi populer. Taman hijau luas, air mancur, dan berbagai fasilitas olahraga menjadikannya tempat ideal untuk bersantai.',
      imgSrc: 'Malang/img/alun alun kota malang.jpeg',
      location: 'Jl. Merdeka Selatan, Kota Malang, Jawa Timur',
      mapsLink: 'https://maps.app.goo.gl/FfN5njiGrVpf8noh8',
      rating: '4.5',
      ticketLink: 'https://malangkota.go.id/tag/alun-alun-kota-malang/'
    },
    {
      id: 'modal2',
      title: 'Jatim Park 1',
      shortDescription: 'Taman hiburan untuk keluarga.',
      description: 'Jatim Park 1 adalah taman hiburan dan edukasi dengan berbagai wahana permainan serta museum. Tempat ini cocok untuk wisata keluarga dengan atraksi seperti taman dinosaurus dan wahana sains.',
      imgSrc: 'Malang/img/jatim park 1.jpeg',
      location: 'Jl. Kartika No.2, Kota Batu, Jawa Timur',
      mapsLink: 'https://maps.app.goo.gl/Tyn8YZhpMMiqHpwK7',
      rating: '4.3',
      ticketLink: 'https://www.jtp.id/'
    },
    {
      id: 'modal3',
      title: 'Museum Angkut',
      shortDescription: 'Museum kendaraan dari berbagai era.',
      description: 'Museum Angkut menampilkan berbagai jenis kendaraan dari masa ke masa. Museum ini memiliki area foto tematik dengan replika kota-kota terkenal di dunia.',
      imgSrc: 'Malang/img/museum angkut.jpeg',
      location: 'Jl. Terusan Sultan Agung No.2, Kota Batu, Jawa Timur',
      mapsLink: 'https://maps.app.goo.gl/bJLWX2qkJqVtRANT8',
      rating: '4.6',
      ticketLink: 'https://jtp.id/museumangkut/mobile/index.html'
    },
    {
      id: 'modal4',
      title: 'Kampung Warna-Warni Jodipan',
      shortDescription: 'Destinasi penuh warna dengan mural.',
      description: 'Kampung Warna-Warni Jodipan adalah destinasi penuh warna dengan mural dan spot foto menarik. Dulunya kampung kumuh, kini menjadi ikon wisata yang ceria dan unik.',
      imgSrc: 'Malang/img/kampung warna warni jodipan.jpeg',
      location: 'Jl. Juanda, Kota Malang, Jawa Timur',
      mapsLink: 'https://maps.app.goo.gl/mwVgQr6jqovbkqoD6',
      rating: '4.4',
      ticketLink: 'https://bakesbangpol.malangkota.go.id/tag/kampung-warna-warni/'
    },
    {
      id: 'modal5',
      title: 'Coban Rondo',
      shortDescription: 'Air terjun dengan pemandangan alam.',
      description: 'Coban Rondo adalah air terjun populer di Malang yang menawarkan pemandangan alam asri. Terdapat area camping dan taman labirin, cocok untuk rekreasi keluarga.',
      imgSrc: 'Malang/img/coban rondo.jpeg',
      location: 'Jl. Coban Rondo, Kab. Malang, Jawa Timur',
      mapsLink: 'https://maps.app.goo.gl/4Enfuy47J8tBZuFh7',
      rating: '4.7',
      ticketLink: 'https://www.instagram.com/cobanrondomalang/?hl=en'
    }
  ];
  
  // Function to render places on the page
  function renderPlaces() {
    const grid = document.getElementById('placesGrid');
    placesMalang.forEach(place => {
      const placeHTML = `
        <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
          <img src="${place.imgSrc}" alt="${place.title}" class="w-full h-48 object-cover">
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold mb-2">${place.title}</h3>
            <p class="text-gray-600">${place.shortDescription}</p>
            <div class="mt-4 flex justify-center items-center">
              <button onclick="openModal('${place.id}')" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all">Lihat Detail</button>
            </div>
          </div>
        </div>`;
      grid.innerHTML += placeHTML;
    });
  }
  
  // Function to open the modal with specific place details
  function openModal(id) {
    const place = placesMalang.find(p => p.id === id);
    if (place) {
      document.getElementById('modalTitle').textContent = place.title;
      document.getElementById('modalDescription').textContent = place.description;
      document.getElementById('modalShortDescription').textContent = place.shortDescription;
      document.getElementById('modalMapsLink').setAttribute('href', place.mapsLink);
      document.getElementById('modalMapsLink').textContent = "Lihat di Peta";
      document.getElementById('modalRating').textContent = `Rating: ${place.rating} ⭐`;
      document.getElementById('modalTicketLink').setAttribute('href', place.ticketLink);
      document.getElementById('modalTicketLink').textContent = "Masuk ke Website";
      document.getElementById('modalImage').setAttribute('src', place.imgSrc);
      document.getElementById('modalImage').classList.remove('w-48', 'h-48');
      document.getElementById('modalImage').classList.add('w-60', 'h-60');
      document.getElementById('modal').classList.remove('hidden');
    }
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modalImage').classList.remove('w-60', 'h-60');
    document.getElementById('modalImage').classList.add('w-48', 'h-48');
  }
  
  // Automatically render the places on page load
  document.addEventListener('DOMContentLoaded', renderPlaces);
  