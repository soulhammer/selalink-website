import fs from 'fs';
import path from 'path';

const transPath = path.join(process.cwd(), 'src/i18n/habitsTranslations.json');
const habitsTranslations = JSON.parse(fs.readFileSync(transPath, 'utf-8'));

if (!habitsTranslations['feynman-child-explanation']) {
  habitsTranslations['feynman-child-explanation'] = {
    ko: { name: "리처드 파인만", habitName: "새로운 지식을 어린아이에게 가르치듯 쉽게 설명하기", quote: "하루 10분 배운 것을 어린이에게 설명하듯 가르치기 (파인만 루틴)" },
    ja: { name: "リチャード・ファインマン", habitName: "新しい知識を子供に教えるようにわかりやすく説明するルーティン", quote: "1日10分学んだことを子供に説明するように教える（ファインマンルーティン）" },
    en: { name: "Richard Feynman", habitName: "Explaining New Knowledge Simply as if Teaching a Child", quote: "Teach what you learned for 10 minutes to a child (Feynman Routine)" }
  };
} else {
  habitsTranslations['feynman-child-explanation'].ja = {
    name: "リチャード・ファインマン",
    habitName: "新しい知識を子供に教えるようにわかりやすく説明するルーティン",
    quote: "1日10分学んだことを子供に説明するように教える（ファインマンルーティン）"
  };
  habitsTranslations['feynman-child-explanation'].en = {
    name: "Richard Feynman",
    habitName: "Explaining New Knowledge Simply as if Teaching a Child",
    quote: "Teach what you learned for 10 minutes to a child (Feynman Routine)"
  };
}

if (!habitsTranslations['alcott-ribbon-signal']) {
  habitsTranslations['alcott-ribbon-signal'] = {
    ko: { name: "루이자 메이 올콧", habitName: "집중 신호용 무드 리본", quote: "방해 금지 시각 신호 설정" },
    ja: { name: "ルイーザ・メイ・オルコット", habitName: "集中信号用ムードリボンルーティン", quote: "妨害禁止の視覚信号設定" },
    en: { name: "Louisa May Alcott", habitName: "Mood Ribbon for Focus Signal", quote: "Set visual Do-Not-Disturb signal" }
  };
} else {
  habitsTranslations['alcott-ribbon-signal'].ja = {
    name: "ルイーザ・メイ・オルコット",
    habitName: "集中信号用ムードリボンルーティン",
    quote: "妨害禁止の視覚信号設定"
  };
  habitsTranslations['alcott-ribbon-signal'].en = {
    name: "Louisa May Alcott",
    habitName: "Mood Ribbon for Focus Signal",
    quote: "Set visual Do-Not-Disturb signal"
  };
}

fs.writeFileSync(transPath, JSON.stringify(habitsTranslations, null, 2), 'utf-8');
console.log('✅ [완료] 파인만 & 올콧 습관 일본어/영어 사전 등록 수술 완료!');
