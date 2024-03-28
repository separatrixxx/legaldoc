import { ToastError } from "../components/Toast/Toast";
import { setLocale } from "./locale.helper";
import OpenAI from "openai";


export async function addDocument(selectedFile: any, setTitle: (e: any) => void, setSummary: (e: any) => void, 
    setLoading: (e: any) => void, router: any) {
    
    if (!selectedFile) {
        ToastError(setLocale(router.locale).need_select_document);

        return;
    }

    alert('gg')

    const reader = new FileReader();

    // reader.onload = async (e) => {
    //     const fileContent = e.target?.result;

    //     let prompt = `Напишите заголовок и аннотацию для следующего юридического документа без кавычек. Ответ пришли на том языке, на котором написан документ.  Подписывать заголовок и аннтотацию не нужно. Просто пришли текст заголовка и текс аннотации, разделённые \n: ${fileContent}`;

    //     setLoading(true);

    //     try {
    //         const stream = await openai.chat.completions.create({
    //             model: "gpt-4",
    //             messages: [{ role: "user", content: prompt }],
    //             stream: true,
    //         });
    
    //         let fullResponse = '';
    
    //         for await (const chunk of stream) {
    //             fullResponse += chunk.choices[0]?.delta?.content || "";
    //         }
    
    //         const parts = fullResponse.split("\n\n");
    //         const title = parts[0].replace("Заголовок: ", "");
    //         const summary = parts[1].replace("Аннотация: ", "");
    
    //         setLoading(false);
    
    //         setTitle(title);
    //         setSummary(summary);
    //     } catch (e) {
    //         ToastError('' + e);

    //         setLoading(false);
    //     }

    //     // console.log(title)
    //     // console.log(summary)

    //     // console.log(fullResponse);
    // };

    // reader.onerror = () => {
    //     console.error('Ошибка при чтении файла');
    //     ToastError('Ошибка при чтении файла');
    // };

    // reader.readAsText(selectedFile);
}
