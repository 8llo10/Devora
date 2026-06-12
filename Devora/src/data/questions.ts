export type Question = {
    id: number;
    topic: "basics" | "problem" | "api" | "database" | "debug";
    question: string;
    options: string[];
    answer: number;
};

export const questions: Question[] = [
    {
        id: 1,
        topic: "basics",
        question: "Variable يعني؟",
        options: ["مكان نخزن فيه قيمة", "زر في الواجهة", "خطأ في الكود", "نوع قاعدة بيانات"],
        answer: 0,
    },
    {
        id: 2,
        topic: "api",
        question: "GET في API تستخدم لـ؟",
        options: ["جلب بيانات", "حذف بيانات", "تشفير بيانات", "إغلاق التطبيق"],
        answer: 0,
    },
];