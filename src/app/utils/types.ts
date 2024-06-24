export interface Message{
    user: string;
    text: string;
}

export interface Chat {
    id : number;
    title: string;
    messages: Message[];
}