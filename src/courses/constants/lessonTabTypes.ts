export const LESSON_TAB_TYPES = ['code', 'component'] as const;

export type LessonTabType = (typeof LESSON_TAB_TYPES)[number];
