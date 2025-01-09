// 导入题库数据
import { questions } from './../questions.js';

// 将问题数据转换为所需格式
function transformQuestions(rawQuestions) {
    return rawQuestions.map(q => ({
        question: q.Question,
        options: q.Options.map(opt => ({
            text: opt.Answer,
            houses: {
                Gryffindor: opt.Gryffindor,
                Ravenclaw: opt.Ravenclaw,
                Hufflepuff: opt.Hufflepuff,
                Slytherin: opt.Slytherin
            }
        }))
    }));
}

export const transformedQuestions = transformQuestions(questions);

export const houseDescriptions = {
    Gryffindor: "You belong to Gryffindor, where dwell the brave at heart. Their daring, nerve, and chivalry set Gryffindors apart.",
    Ravenclaw: "You belong to Ravenclaw, where those of wit and learning will always find their kind. Wit beyond measure is man's greatest treasure.",
    Hufflepuff: "You belong to Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true and unafraid of toil.",
    Slytherin: "You belong to Slytherin, where you'll make your real friends. Those cunning folks use any means to achieve their ends."
};

// 导出随机选择问题的函数
export function selectRandomQuestions(count = 12) {
    const shuffled = [...transformedQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export { questions };