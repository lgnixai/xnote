import { Key } from "react";
import { create } from "zustand";

export type ModeType = 'light' | 'dark' // 主题类型 light:明亮 dark:黑暗

// 定义store的类型
interface StoreProps {
    treeDatas: any[]; // 树形数据
    setTreeData: (data: any) => void; // 设置树形数据

    selectedTreeData: Record<string, any>; // 选中的树形数据
    setSelectedTreeData: (data: any) => void; // 设置选中的树形数据

    expandedKeys: Key[]; // 展开的树形节点
    setExpandedKeys: (data: Key[]) => void; // 设置展开的树形节点

    autoExpandParent: boolean; // 是否自动展开父节点 默认true
    setAutoExpandParent: (data: boolean) => void; // 设置是否自动展开父节点
}

// 创建store
export const useStore = create<StoreProps>()(set => ({
    /* 树形数据 */
    treeDatas: [],
    setTreeData: (data: any) => set({ treeDatas: data }), // 修改方法

    /* 被选中的树形数据 */
    selectedTreeData: {},
    setSelectedTreeData: (data: any) => set({ selectedTreeData: data }), // 修改方法

    /* 展开的树形节点 */
    expandedKeys: [],
    setExpandedKeys: (data: Key[]) => set({ expandedKeys: data }), // 修改方法

    /* 是否自动展开父节点 默认true */
    autoExpandParent: true,
    setAutoExpandParent: (data: boolean) => set({ autoExpandParent: data }), // 修改方法
}))