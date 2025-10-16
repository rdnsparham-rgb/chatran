// train_model.js
const fs = require("fs");

// نمونه‌ی متن آموزشی (میتونی متن بیشتر بزاری)
const corpus = `
سلام! حالت چطوره؟
من خوبم، ممنون که پرسیدی.
امروز روز قشنگیه، آفتابیه!
میخوای با من حرف بزنی؟
من هوش مصنوعی هستم و از حرف زدن خوشم میاد.
دوست دارم به سوالات جواب بدم.
`;

// پردازش متن و تبدیل به داده‌های آموزشی
const sentences = corpus.split(/[.!؟\n]+/).map(s => s.trim()).filter(Boolean);
let dataset = [];
sentences.forEach(s => {
  const words = s.split(/\s+/);
  for (let i = 0; i < words.length - 2; i++) {
    dataset.push({
      input: [words[i], words[i+1]],
      output: words[i+2]
    });
  }
});

const model = { dataset };
fs.writeFileSync(".github/workflows/model.json", JSON.stringify(model, null, 2));
console.log("✅ مدل زبانی ساخته شد و ذخیره شد در model.json");
