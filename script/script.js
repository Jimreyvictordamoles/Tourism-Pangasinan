const destinationList = document.getElementById("destinationList");
const searchInput = document.getElementById("searchInput");
const destinations = [
    {
        name: "Hundred Islands National Park",
        city: "Alaminos",
        category: "Island",
        img: "images/islands.jpg",
        desc: "Hundred Islands National Park features over 100 limestone islands scattered across the Lingayen Gulf. It is a protected marine sanctuary perfect for island hopping, snorkeling, kayaking, and sightseeing.",
        location: "Alaminos City, Pangasinan",
        activities: "Island hopping, snorkeling, kayaking",
        best: "November to May",
        fee: "₱100–₱400 boat fee",
        hours: "6:00 AM – 5:00 PM",
        tips: "Bring sunscreen and waterproof bags"
    },

    {
        name: "Bolinao White Beach",
        city: "Bolinao",
        category: "Beach",
        img: "images/bolinao.jpg",
        desc: "A peaceful white sand beach known for its calm waters, relaxing atmosphere, and beautiful sunsets. Ideal for swimming and unwinding.",
        location: "Bolinao, Pangasinan",
        activities: "Swimming, sunset viewing",
        best: "Summer season",
        fee: "Free / minimal entrance",
        hours: "Open 24 hours",
        tips: "Visit early morning for fewer crowds"
    },

    {
        name: "Mount Balungao Eco Park",
        city: "Balungao",
        category: "Mountain",
        img: "images/mountain.webp",
        desc: "A volcanic mountain destination offering hiking trails, hot spring pools, and panoramic views of Pangasinan landscape.",
        location: "Balungao, Pangasinan",
        activities: "Hiking, hot springs, sightseeing",
        best: "December to February",
        fee: "₱50–₱150",
        hours: "7:00 AM – 6:00 PM",
        tips: "Wear comfortable shoes"
    },

    {
        name: "Tayug Waterfalls",
        city: "Tayug",
        category: "Waterfall",
        img: "images/waterfall.jpg",
        desc: "A refreshing natural waterfall surrounded by lush greenery, perfect for swimming and nature trips.",
        location: "Tayug, Pangasinan",
        activities: "Swimming, trekking",
        best: "Rainy season",
        fee: "₱20–₱50",
        hours: "6:00 AM – 5:00 PM",
        tips: "Bring extra clothes"
    },

    {
        name: "Manaoag Church",
        city: "Manaoag",
        category: "Historical Site",
        img: "images/manaoag.jpg",
        desc: "A famous pilgrimage site known for the miraculous image of Our Lady of Manaoag, attracting thousands of devotees yearly.",
        location: "Manaoag, Pangasinan",
        activities: "Prayer, pilgrimage",
        best: "Year-round",
        fee: "Free",
        hours: "5:00 AM – 8:00 PM",
        tips: "Visit weekdays for fewer crowds"
    },

    {
        name: "Bugallon Adventure Park",
        city: "Bugallon",
        category: "Adventure",
        img: "images/adventure.jfif",
        desc: "An outdoor adventure park offering zipline rides, obstacle courses, and group activities for thrill-seekers.",
        location: "Bugallon, Pangasinan",
        activities: "Zipline, obstacle course",
        best: "Dry season",
        fee: "₱100–₱300",
        hours: "8:00 AM – 5:00 PM",
        tips: "Wear sporty clothes"
    },

    {
        name: "Dagupan Bangus Strip",
        city: "Dagupan",
        category: "Food Destination",
        img: "images/food.jpg",
        desc: "Famous for its fresh and grilled milkfish (bangus), Dagupan offers authentic local food experiences.",
        location: "Dagupan City, Pangasinan",
        activities: "Food tasting",
        best: "Year-round",
        fee: "₱100–₱300 meals",
        hours: "10:00 AM – 10:00 PM",
        tips: "Try grilled boneless bangus"
    }
];

function display(data) {
    if (!destinationList) return;

    destinationList.innerHTML = "";

    data.forEach((d, index) => {
        destinationList.innerHTML += `
        <div class="col-md-4">
            <div class="card shadow">
                <img src="${d.img}" class="card-img-top">
                <div class="card-body">
                    <h5>${d.name}</h5>
                    <p>${d.city} | ${d.category}</p>
                    <button class="btn btn-dark w-100" onclick="viewDetails(${index})">
                        View Details
                    </button>
                </div>
            </div>
        </div>`;
    });
}

function viewDetails(index) {
    const d = destinations[index];
    if (!d) return;

    const modalTitle = document.getElementById("modalTitle");
    const modalImg = document.getElementById("modalImg");
    const modalDesc = document.getElementById("modalDesc");
    const modalLocation = document.getElementById("modalLocation");
    const modalActivities = document.getElementById("modalActivities");
    const modalBest = document.getElementById("modalBest");
    const modalFee = document.getElementById("modalFee");
    const modalHours = document.getElementById("modalHours");
    const modalTips = document.getElementById("modalTips");
    const modalEl = document.getElementById("detailModal");

    if (!modalEl) return;

    modalTitle.innerText = d.name;
    modalImg.src = d.img;
    modalDesc.innerText = d.desc;
    modalLocation.innerText = d.location;
    modalActivities.innerText = d.activities;
    modalBest.innerText = d.best;
    modalFee.innerText = d.fee;
    modalHours.innerText = d.hours;
    modalTips.innerText = d.tips;

    bootstrap.Modal.getOrCreateInstance(modalEl).show();
}

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        const filtered = destinations.filter(d =>
            d.name.toLowerCase().includes(value) ||
            d.city.toLowerCase().includes(value) ||
            d.category.toLowerCase().includes(value)
        );

        display(filtered);
    });
}

function filterCategory(category) {
    if (!destinationList) return;

    if (category === "All") {
        display(destinations);
    } else {
        const filtered = destinations.filter(d => d.category === category);
        display(filtered);
    }
}

if (destinationList) {
    display(destinations);
}


const galleryContainer = document.getElementById("galleryList");
const galleryImg = document.getElementById("galleryImg");
const galleryCaption = document.getElementById("galleryCaption");

const gallery = [
    "Hundred Islands National Park", "Bolinao White Beach", "Anda Blue Lagoon", "Manaoag Church", 
    "Lingayen Beach Sunset", "Cape Bolinao Lighthouse", "Patar Beach", "Enchanted Cave Bolinao", 
    "Tondol Beach Anda", "Lingayen Gulf View", "Bolinao Falls", "Governor’s Island", "Quezon Island", 
    "Children’s Island", "Lucap Wharf", "Bani Salt Farms", "Dagupan Bangus Festival", "Pangasinan Street Food", 
    "Calasiao Puto", "Pangasinan Longganisa", "Fishing in Lingayen Gulf", "Sunrise in Anda", "Island Hopping View", 
    "Rock Formations Bolinao", "Mangrove Forest Tour", "Local Fishermen Life", "Sunset by the Coast",
    "Beach Camping Experience","Crystal Clear Waters", "Island Adventure Moments"
];

let currentIndex = 0;

function loadGallery() {
    if (!galleryContainer) return;

    galleryContainer.innerHTML = "";

    for (let i = 1; i <= 30; i++) {
        galleryContainer.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3">
            <img src="images/gallery${i}.jpg"
            class="w-100 rounded shadow"
            style="height:180px; object-fit:cover; cursor:pointer;"
            onclick="openModal(${i - 1})">
        </div>`;
    }
}

function openModal(index) {
    const modalEl = document.getElementById("galleryModal");
    if (!modalEl || !galleryImg || !galleryCaption) return;

    currentIndex = index;

    galleryImg.src = `images/gallery${index + 1}.jpg`;
    galleryCaption.innerText = gallery[index] || "Pangasinan View";

    bootstrap.Modal.getOrCreateInstance(modalEl).show();
}

function changeSlide(step) {
    currentIndex += step;

    if (currentIndex >= gallery.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = gallery.length - 1;

    if (galleryImg && galleryCaption) {
        galleryImg.src = `images/gallery${currentIndex + 1}.jpg`;
        galleryCaption.innerText = gallery[currentIndex];
    }
}

const galleryModal = document.getElementById("galleryModal");
if (galleryModal) {
    galleryModal.addEventListener("hidden.bs.modal", function () {
        document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
        document.body.classList.remove("modal-open");
    });
}

if (galleryContainer) {
    loadGallery();
}

const inquiryForm = document.getElementById("inquiryForm");

if (inquiryForm) {
    inquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        document.querySelectorAll(".error").forEach(el => el.innerText = "");

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let contact = document.getElementById("contact").value.trim();
        let destination = document.getElementById("destination").value;
        let date = document.getElementById("date").value;
        let visitors = document.getElementById("visitors").value;
        let message = document.getElementById("message").value.trim();

        if(name.trim().split(" ").length < 2){
            document.getElementById("nameError").innerText = "Please enter your full name";
            valid = false;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Enter a valid email";
            valid = false;
        }

        if (!/^[0-9]+$/.test(contact)) {
            document.getElementById("contactError").innerText = "Contact must be numbers only";
            valid = false;
        }

        if (destination === "") {
            document.getElementById("destinationError").innerText = "Please select a destination";
            valid = false;
        }

        if (date === "") {
            document.getElementById("dateError").innerText = "Travel date is required";
            valid = false;
        }

        if (visitors < 1) {
            document.getElementById("visitorsError").innerText = "At least 1 visitor required";
            valid = false;
        }

        if (message === "") {
            document.getElementById("messageError").innerText = "Message is required";
            valid = false;
        }

        if (valid) {
            alert("Inquiry submitted successfully!");
            inquiryForm.reset();
        }
    });
}