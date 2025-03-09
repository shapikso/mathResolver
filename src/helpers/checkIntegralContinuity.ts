import {create, all} from 'mathjs';

const config = { };
const math = create(all, config);

type MathFunction = (x: number) => number;

// Function for numerical integration using the trapezoidal method
function numericalIntegral(f: MathFunction, a: number, b: number, n: number = 1000): number {
    const h = (b - a) / n;
    let sum = 0;

    for (let i = 1; i < n; i++) {
        let x = a + i * h;
        sum += f(x);
    }

    return h * ((f(a) + f(b)) / 2 + sum);
}

// Функция для проверки разрывов (например, деление на ноль)
function hasDiscontinuity(f: MathFunction, a: number, b: number, step: number = 0.01, threshold: number = 1e6): boolean {
    for (let x = a; x <= b; x += step) {
        try {
            let y = f(x);
            if (!isFinite(y) || Math.abs(y) > threshold) { // Если значение слишком большое, считаем это разрывом
                return true;
            }
        } catch (e) {
            return true; // Ошибка при вычислении функции — это разрыв
        }
    }
    return false;
}

// Основная функция для проверки непрерывности интеграла
export function checkIntegralContinuity(funcStr: string, a: number, b: number): boolean {
    const f = math.compile(funcStr);

    // Проверка на разрывы в функции
    if (hasDiscontinuity((x) => f.evaluate({ x }), a, b)) {
        return false;
    }

    const F_values: number[] = [];
    const x_values = math.range(a, b, 0.05).toArray();

    try {
        // Численно вычисляем интеграл в различных точках
        for (let x of x_values) {
            let integral = numericalIntegral((x) => f.evaluate({ x }), a, Number(x));
            F_values.push(integral);
        }
    } catch (e) {
        console.log("❌ Ошибка при интегрировании:", e);
        return false;
    }
    // Проверка на большие скачки в значениях интеграла
    // for (let i = 1; i < F_values.length; i++) {
    //     if (Math.abs(F_values[i] - F_values[i - 1]) > 10) {
    //         console.log("⚠️ Обнаружены большие скачки в интеграле!");
    //         return false;
    //     }
    // }

    console.log("✅ Интеграл непрерывен.");
    return true;
}