const STORAGE_KEY = "happy-kids-progress-v1";

const worldInfo = {
  vehicles: { title: "車車世界", icon: "🚒", copy: "車車世界即將出發！下一階段會先加入認識車車與聲音探索。" },
  animals: { title: "動物世界", icon: "🐮", copy: "動物世界正在準備中，之後可以認識動物、聽動物叫聲。" },
  fruits: { title: "水果世界", icon: "🍎", copy: "水果世界正在準備中，之後可以認識水果、顏色和形狀。" },
  puzzles: { title: "益智世界", icon: "🧩", copy: "益智世界正在準備中，之後會有配對、拼圖和記憶遊戲。" },
  sounds: { title: "聲音世界", icon: "🎵", copy: "聲音世界正在準備中，之後可以探索樂器和生活中的聲音。" }
};

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { stars: Number.isInteger(saved?.stars) && saved.stars >= 0 ? saved.stars : 0 };
  } catch {
    return { stars: 0 };
  }
}

let progress = readProgress();

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  renderStars();
}

function renderStars() {
  document.querySelector("#star-count").textContent = progress.stars;
  document.querySelector("#parent-star-count").textContent = progress.stars;
}

const comingDialog = document.querySelector("#coming-dialog");
document.querySelectorAll("[data-world]").forEach((card) => {
  card.addEventListener("click", () => {
    const world = worldInfo[card.dataset.world];
    document.querySelector("#coming-icon").textContent = world.icon;
    document.querySelector("#coming-title").textContent = world.title;
    document.querySelector("#coming-copy").textContent = world.copy;
    comingDialog.showModal();
  });
});

const parentDialog = document.querySelector("#parent-dialog");
document.querySelector("#parent-button").addEventListener("click", () => {
  renderStars();
  parentDialog.showModal();
});

document.querySelector("#reset-stars").addEventListener("click", () => {
  const confirmed = window.confirm("確定要重設目前累積的星星嗎？");
  if (!confirmed) return;
  progress = { stars: 0 };
  saveProgress();
});

renderStars();

// Later game modules can award stars through this shared function.
window.HappyKids = {
  addStars(amount = 1) {
    const value = Number(amount);
    if (!Number.isInteger(value) || value <= 0) return;
    progress.stars += value;
    saveProgress();
  },
  getProgress() {
    return { ...progress };
  }
};
