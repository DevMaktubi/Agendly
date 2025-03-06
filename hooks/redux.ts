"use client"
import { AppDispatch, RootState } from '@/redux/store'
import {useDispatch, useSelector} from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = (fn: any) => useSelector<RootState>(fn)
