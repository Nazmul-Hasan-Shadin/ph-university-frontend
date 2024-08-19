

export const monthNames=[
    'January',
    'February',
    'Merch',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export const monthOptions=monthNames.map(month=>({
    value:month,
    label:month
}))


export const genders= ['male','female','others']


export const bloodGorups=['A','B+','B-','AB+','AB-','O+','O-']


export const genderOption= genders.map(gender=>({
    value:gender,
    label:gender
}))



export const bloodGroupOptions= bloodGorups.map(bloodGroup=>({
    value:bloodGroup,
    label:bloodGroup
}))