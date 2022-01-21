import { ChangeEvent } from 'react'

export interface IBoardWriteProps{
    isEdit: boolean 
    data?: any 
 }

export interface IBoardWriteUIProps {
    //빈칸으로 댑두면 빈 객체라고 오류가 남
    bbb: string
    ccc: () =>void
    xxx: () =>void
    ddd: (event: ChangeEvent<HTMLInputElement>) => void
    eee: (event: ChangeEvent<HTMLInputElement>) => void
    fff: (event: ChangeEvent<HTMLInputElement>) => void
    isActive: boolean
    isEdit: boolean
    data: any //(뭔지 몰라서 다 받음)
}

export interface IMyButtonProps{
    ggg:boolean
}
