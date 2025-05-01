document.getElementById('learn-more').addEventListener('click', function() {
    const particles = document.createElement('div');
    particles.style.position = 'fixed';
    particles.style.background = 'rgba(255,0,0,0.5)';
    particles.style.pointerEvents = 'none';
    document.body.appendChild(particles);

    // 模拟内存泄漏效果
    setInterval(() => {
        const leak = new Array(1000000).fill(0);
        console.log('内存占用+1');
    }, 1000);
});