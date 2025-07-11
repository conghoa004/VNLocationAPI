
// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 1000 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 2, random: true },
    line_linked: { enable: true, distance: 120, color: "#ffffff", opacity: 0.2, width: 1 },
    move: { enable: true, speed: 1.5, direction: "none", random: false }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
    modes: { repulse: { distance: 80, duration: 0.4 }, push: { particles_nb: 3 } }
  },
  retina_detect: true
});

// Load provinces
async function loadProvinces() {
  const provinceSelect = document.getElementById('province');

  await fetch("/api/province")
    .then(response => response.json())
    .then(success => {
      if (success.success) {
        listProvince = success.data;

        listProvince.forEach(province => {
          const option = document.createElement('option');
          option.value = province.id;
          option.textContent = province.name;
          provinceSelect.appendChild(option);
        });
      }
    })
    .catch(error => {
      console.error("Error fetching address data:", error);
    });
}

// Load wards based on selected province
async function loadWards() {
  const province = document.getElementById('province').value;
  const provinceSelect = document.getElementById('province');
  const selectedProvinceName = provinceSelect.selectedOptions[0].textContent;
  const wardSelect = document.getElementById('ward');
  const alertBox = document.getElementById('alertBox');

  // Clear previous options and alert
  wardSelect.innerHTML = '<option value="">Chọn Xã/Phường/Đặc Khu</option>';
  wardSelect.disabled = true;
  alertBox.classList.add('d-none');

  // Load wards for the selected province
  await fetch("/api/ward?id=" + province)
    .then(response => response.json())
    .then(success => {

      let listWard = null;

      if (success.success && success.data && province) {
        listWard = success.data;
        wardSelect.disabled = false;

        listWard.forEach(ward => {
          const option = document.createElement('option');
          option.value = ward.id;
          option.textContent = ward.name;
          wardSelect.appendChild(option);
        });
      }
    })
    .catch(error => {
      console.error("Error fetching address data:", error);
    });

  // Show selected province in alert
  if (province) {
    alertBox.textContent = `Đã chọn tỉnh: ${selectedProvinceName}`;
    alertBox.classList.remove('d-none');
  }
}

// Reset form
function resetForm() {
  const provinceSelect = document.getElementById('province');
  const wardSelect = document.getElementById('ward');
  const alertBox = document.getElementById('alertBox');
  provinceSelect.value = "";
  wardSelect.value = "";
  wardSelect.disabled = true;
  alertBox.classList.add('d-none');
}

// Initialize provinces on page load
window.onload = loadProvinces;