let active = false;
let currentBlock = null;
let initialX, initialY;
let offsetX, offsetY;

document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('mousedown', (e) => {
        active = true;
        currentBlock = block;

        // Запоминаем начальные координаты блока и мыши
        initialX = e.clientX - block.getBoundingClientRect().left;
        initialY = e.clientY - block.getBoundingClientRect().top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        // Функция для обработки движения мыши
        function onMouseMove(e) {
            if (!active) return;

            const newX = e.clientX - initialX;
            const newY = e.clientY - initialY;

            // Проверяем, не выходит ли блок за пределы экрана
            if (newX >= 0 && newX + block.clientWidth <= window.innerWidth && newY >= 0 && newY + block.clientHeight <= window.innerHeight) {
                // Проверяем столкновения с другими блоками
                let collisionDetected = false;
                document.querySelectorAll('.block').forEach(otherBlock => {
                    if (otherBlock !== block) {
                        const rect1 = block.getBoundingClientRect();
                        const rect2 = otherBlock.getBoundingClientRect();

                        if (
                            rect1.right >= rect2.left &&
                            rect1.left <= rect2.right &&
                            rect1.bottom >= rect2.top &&
                            rect1.top <= rect2.bottom
                        ) {
                            // Блоки пересекаются, определяем направление сдвига
                            const dx = newX - offsetX;
                            const dy = newY - offsetY;

                            // Определяем, какой блок движется
                            const isBlockMoving = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? otherBlock : block) : (dy > 0 ? otherBlock : block);

                            // Сдвигаем стоящий блок
                            if (isBlockMoving === block) {
                                block.style.left = `${rect2.right}px`;
                            } else {
                                otherBlock.style.left = `${rect1.right}px`;
                            }

                            collisionDetected = true;
                        }
                    }
                });

                // Если нет столкновений, устанавливаем новые координаты блока
                if (!collisionDetected) {
                    block.style.left = `${newX}px`;
                    block.style.top = `${newY}px`;
                }
            }
        }

        // Функция для завершения перемещения
        function onMouseUp(e) {
            active = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            // Сохраняем координаты блока после завершения перемещения
            offsetX = parseFloat(block.style.left);
            offsetY = parseFloat(block.style.top);
        }
    });
});
