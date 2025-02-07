document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let result = '';
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');

    if (question1 && question2) {
        if (question1.value === 'Science' && question2.value === 'Problem solving') {
            result = 'You should consider pursuing a career in Engineering or Research.';
        } else if (question1.value === 'Math' && question2.value === 'Problem solving') {
            result = 'You should consider pursuing a career in Data Science or Mathematics.';
        } else if (question1.value === 'Arts' && question2.value === 'Creative thinking') {
            result = 'You should consider pursuing a career in Design, Arts, or Creative Industries.';
        } else if (question1.value === 'Literature' && question2.value === 'Helping others') {
            result = 'You should consider pursuing a career in Teaching, Counseling, or Writing.';
        } else {
            result = 'Your career path could be diverse! Consider exploring more options.';
        }
    } else {
        result = 'Please answer all the questions.';
    }

    document.getElementById('result').textContent = result;
});
