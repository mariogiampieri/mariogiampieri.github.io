$(document).ready(function() {
    var overlay = document.getElementById('overlay')
    $('#overlay').hide()
})



var mck_lu_existing = document.getElementById('mck-lu-existing')
mck_lu_existing.addEventListener('click', function() {
    console.log('clicked')
    $('#overlay').show()
    overlay.setAttribute('style', 'background-image: url("./img/diagrams/mckinney_lu_existing.png"); background-repeat:no-repeat')
})


var overlay_close = document.getElementById('overlay-close-button')
overlay_close.addEventListener('click', function() {
    console.log('clicked')
    $('#overlay').hide()

})


var optImgs = {
    'a1': {
        'ex': './img/diagrams/Land Use Optimization/Mckinney Site01/Site01Before.png',
        'opt': './img/diagrams/Land Use Optimization/Mckinney Site01/Site01After.png'
    },
    'a2': {
        'ex': './img/diagrams/Land Use Optimization/Mckinney Site02/Site02Before.png',
        'opt': './img/diagrams/Land Use Optimization/Mckinney Site02/Site02After.png'
    },
    'a3': {
        'ex': './img/diagrams/Land Use Optimization/Mckinney Site03/Site03Before.png',
        'opt': './img/diagrams/Land Use Optimization/Mckinney Site03/Site03After.png'
    },
    'a4': {
        'ex': './img/diagrams/Land Use Optimization/VIDA SITE/VIDA Before.png',
        'opt': './img/diagrams/Land Use Optimization/VIDA SITE/VIDA After.png'
    }
}

slus = {
    'er': {
        'ec-er': './img/slu/01_Estate Family Residential/00_SER_EXISTING.png',
        'ad1-er': './img/slu/01_Estate Family Residential/01_ER_AD1.png',
        'ad2-er': './img/slu/01_Estate Residential/02_ER_AD2.png'
    },
    'sfr': {
        'ec-sfr': './img/slu/02_Single Family Residential/00_SFH_EXISTING.png',
        'ad1-sfr': './img/slu/02_Single Family Residential/01_SFH_AD1.png',
        'ad2-sfr': './img/slu/02_Single Family Residential/02_SFH_AD2.png'
    },
    'mfr': {
        'ec-mfr': './img/slu/04_Multi-Family Residential/00_MFH_EXISTING.png',
        'ad1-mfr': './img/slu/04_Multi-Family Residential/01_MFH_AD1.png',
        'ad2-mfr': './img/slu/04_Multi-Family Residential/02_MFH_AD2.png'
    },
    'nc': {
        'ec-nc': './img/slu/06_Neighborhood Commercial/00_NC_EXISTING.png',
        'ad1-nc': './img/slu/06_Neighborhood Commercial/01_NC_AD1.png',
        'ad2-nc': './img/slu/06_Neighborhood Commercial/02_NC_AD2.png'
    },
    'pc': {
        'ec-pc': './img/slu/10_Professional Campus/00_PC_EXISTING.png',
        'ad1-pc': './img/slu/10_Professional Campus/01_PC_AD1.png',
        'ad2-pc': './img/slu/10_Professional Campus/02_PC_AD2.png'
    }
}






function createSection(content) {
    var row = document.createElement('div')
    row.setAttribute('class', 'row')
        // row.setAttribute('id', 'firstrow')
    for (var i in content['components']) {
        console.log(content['components'][i]['type'])
        var item = document.createElement('div')
        item.setAttribute('class', 'col-sm-4 col-md-4')

        if (content['components'][i]['type'] == 'description') {
            var text = document.createElement('div')
            text.setAttribute('id', 'text-' + i)
            var b = document.createElement('P')
            var f = document.createTextNode(content['components'][i]['content'])
            b.appendChild(f)
            text.appendChild(b)


            // add a button 
            var button = document.createElement('button')
            button.setAttribute('class', 'btn btn-primary')
            button.setAttribute('data-toggle', 'modal')
            button.setAttribute('data-target', content['components'][i]['footer']['modal'])
                // need to populate the modal based on the attributes of the object
            button.setAttribute('id', 'btn-modal')
            console.log(content['components'][i]['footer']['modal'])
            bt = document.createElement('P')
                // bt.setAttribute('html', 'bbbbbbbbbbbbb')
            bt = document.createTextNode(content['components'][i]['footer']['label'])
            button.appendChild(bt)
            item.appendChild(text)
            item.appendChild(button)
            row.appendChild(item)

        } else if (content['components'][i]['type'] == 'diagram') {
            var thumb = document.createElement('div')
            thumb.setAttribute('class', 'thumbnail')
            var img = document.createElement('img')
            img.setAttribute('src', content['components'][i]['content'])
                // add button later
            var title = document.createElement('h3')
            var t = document.createTextNode(content['components'][i]['title'])
            title.appendChild(t)
            thumb.appendChild(img)


            // bottom graphic- need to make if for if text
            var bimg = document.createElement('div')
            bimg.setAttribute('class', 'thumbnail')
            var bi = document.createElement('img')
            bi.setAttribute('src', content['components'][i]['footer']['graph'])
            bimg.appendChild(bi)

            item.appendChild(title)
            item.appendChild(thumb)
            item.appendChild(bimg)
            row.appendChild(item)


        }
        document.getElementById('atomizing-1').appendChild(row)
        document.getElementById('btn-modal').click(function() {
            console.log('eh')
        })
    }
    return row
}


function createModal(temp) {
    var modal = document.createElement('div')
    modal.setAttribute('class', 'modal fade')
    modal.setAttribute('id', temp['id'])
    modal.setAttribute('tabindex', '-1')
    modal.setAttribute('role', 'dialog')
    modal.setAttribute('aria-labelledby', temp['id'])
    modal.setAttribute('aria-hidden', 'true')

    var modalDialog = document.createElement('div')
    modalDialog.setAttribute('class', 'modal-dialog')
    modalDialog.setAttribute('role', 'document')

    var modalContent = document.createElement('div')
    modalContent.setAttribute('class', 'modal-content')

    var modalHeader = document.createElement('div')
    modalHeader.setAttribute('class', 'modal-header')
    var modalTitle = document.createElement('h5')
    var modalTitleContent = document.createTextNode(temp['title'])

    var modalBody = document.createElement('div')
    modalBody.setAttribute('class', 'modal-body')
    var modalBodyContent = createSection(temp)
    modalBody.appendChild(modalBodyContent)
    console.log(modalBodyContent)
    var modalFooter = document.createElement('div')
    modalFooter.setAttribute('class', 'modal-footer')
    var closeModal = document.createElement('button')
    closeModal.setAttribute('class', 'btn btn-secondary')
    closeModal.setAttribute('data-dismiss', 'modal')
    var closeDialog = document.createTextNode('Close')
    closeModal.appendChild(closeDialog)
    modalFooter.appendChild(closeModal)
    modalHeader.appendChild(modalTitle)
    modalContent.appendChild(modalHeader)
    modalContent.appendChild(modalBody)
    modalContent.appendChild(modalFooter)
    modalDialog.appendChild(modalContent)

    modal.appendChild(modalDialog)
    console.log('modal created')
    document.getElementById('atomizing-1').appendChild(modal)
}