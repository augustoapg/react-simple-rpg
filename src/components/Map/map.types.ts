export interface MapType {
    [rowNumber: number]: MapCell[];
}

export interface MapCell {
    style: 'path' | 'wall'
}