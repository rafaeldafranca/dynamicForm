export interface FormModel {
    template: string
    fields: FieldModel
}

export interface FieldModel {
    element: string
    label: string
    value: string
    type: string
    order: number
    rules: string[]
    items: string[]
}
