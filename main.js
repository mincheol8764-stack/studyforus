document.addEventListener('DOMContentLoaded', () => {
    const sentences = [
        { english: "I can read the book.", korean: "나는 책을 읽을 수 있어요." },
        { english: "You are my friend.", korean: "너는 나의 친구야." },
        { english: "I like swimming.", korean: "나는 수영을 좋아해요." },
        { english: "I want to go to zoo.", korean: "저는 동물원에 가고 싶어요." },
        { english: "She is not my sister.", korean: "그녀는 나의 자매가 아니에요." },
        { english: "This question is hard.", korean: "이 질문은 어려워요." },
        { english: "My family lives in Boston.", korean: "내 가족들은 보스턴에 살아요." },
        { english: "I get up early every day.", korean: "나는 매일 일찍 일어나요." },
        { english: "Where is your school?", korean: "너희 학교는 어디니?" },
        { english: "What’s up?", korean: "잘 지냈어? (안녕?)" }
    ];

    let currentIndex = 0;
    const synth = window.speechSynthesis;

    const sentenceEl = document.getElementById('sentence');
    const meaningEl = document.getElementById('meaning');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const playBtn = document.getElementById('play-btn');

    function updateSentence() {
        sentenceEl.textContent = sentences[currentIndex].english;
        meaningEl.textContent = sentences[currentIndex].korean;
        prevBtn.disabled = (currentIndex === 0);
        nextBtn.disabled = (currentIndex === sentences.length - 1);
    }

    function playSound(text) {
        if (synth.speaking) {
            synth.cancel();
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        synth.speak(utterance);
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSentence();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < sentences.length - 1) {
            currentIndex++;
            updateSentence();
        }
    });

    playBtn.addEventListener('click', () => {
        playSound(sentences[currentIndex].english);
    });

    // 초기 문장 로드
    updateSentence();
});
