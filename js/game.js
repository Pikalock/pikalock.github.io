document.addEventListener('DOMContentLoaded', () => {
    const questions = [
      {
        question: "凯撒密码：'Khoor Zruog' 的明文是什么？（偏移量为3）",
        answer: "Hello World"
      },
      {
        question: "电车难题中，你选择：A. 不作为 B. 拉杠杆",
        answer: "B"
      },
      {
        question: "斐波那契数列第10项是？",
        answer: "55"
      }
    ];
  
    let currentQuestion = 0;
    const progress = document.getElementById('progress');
  
    function updateProgress() {
      progress.style.width = `${(currentQuestion / questions.length)*100}%`;
    }
  
    function showQuestion(index) {
      document.querySelectorAll('.question-card').forEach(card => card.style.display = 'none');
      document.getElementById(`question${index+1}`).style.display = 'block';
    }
  
    function checkAnswer(input, expected) {
      if (input.value.trim().toUpperCase() === expected.toUpperCase()) {
        currentQuestion++;
        updateProgress();
        if (currentQuestion < questions.length) {
          showQuestion(currentQuestion);
        } else {
          showQuestion(currentQuestion);
          document.getElementById('success').style.display = 'block';
        }
      } else {
        alert('答案错误，请重试');
      }
    }
  
    // 初始化
    showQuestion(currentQuestion);
    updateProgress();
  
    // 绑定事件
    document.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const input = e.target.closest('.question-card').querySelector('input');
        checkAnswer(input, questions[currentQuestion].answer);
      });
    });
  });
  