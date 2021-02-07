import {PrepareNamespace} from "../../../../../Functions/Core/PrepareNamespace";

const Namespace: string = "APP/TOAST";

export const actionTypes = {
    'SET_TOAST': PrepareNamespace(Namespace, 'SET_TOAST'),
};