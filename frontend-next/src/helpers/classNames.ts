type ClassNamesInput = string | number | null | undefined | false

export const classNames = (...classes: ClassNamesInput[]) => (
    classes.filter(Boolean).join(' ').trim()
)
