import {FirebaseStorageService} from "./firebaseServices";
import {collection, doc, query, where} from "firebase/firestore";
import {db} from "../firebase";
import {BoardInfo} from "../components/types/types";
import {toast} from "react-toastify";
import {MESSAGES} from "../constants/messages";

export class BoardServices extends FirebaseStorageService {
    private boardRef = collection(db, "boards");
    public async addBoard (data: BoardInfo) {
        const res = await this.firebasePost(doc(this.boardRef), data);
        toast.success(MESSAGES.BOARD_ADDED_SUCCESSFUL);
        return res;
    }
    public async getBoards (uid: string) {
        const q = query(this.boardRef, where('members', 'array-contains', uid));
        const {docs} = await this.firebaseGetFields(q);
        return docs.map((doc) => ({...doc.data(), id: doc.id}));
    }
}