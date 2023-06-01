export interface FormModel {
    template: string
    fields: FieldModel
}

export interface FieldModel {
    items: FieldItemModel[]
}
export interface FieldItemModel {
    element: string
    label: string
    value: string
    type: string
    order: number
    items: string[]
}
