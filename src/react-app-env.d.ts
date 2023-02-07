/// <reference types="react-scripts" />
// / <reference types="react-scripts" />

type PromiseValue<T> = T extends PromiseLike<infer U> ? U : T;

declare namespace tmapTypes {
  /**
   * 里程碑列表展示模式
   *
   * board: 看板模式
   *
   * list: 列表模式
   */
  type EpicDisplayMode = 'board' | 'list';

  /**
   * 优化TS内置的Omit类型
   *
   * 从T中删除某几个Key，重新生成新的类型
   *
   * @example TmapOmit<T, 'k1' | 'k2'>
   *
   */
  type TmapOmit<T, K extends keyof T> = Omit<T, K>;

  /**
   * 里程碑目标类型
   *
   * 1: KR
   *
   * 2: 举措
   *
   * 3: TAPD关联
   *
   * 4: 手工输入
   */
  type EpicTargetType = 1 | 2 | 3 | 4;
}