window.addEventListener('load', (event) => {
    document.addEventListener('selectionchange', ()=>{
        const target = document.querySelector('#editor');
        const editorRange = document.createRange();
        const editorSel = window.getSelection();
        console.log('editorSel', editorSel);

        var ruby = document.createElement("ruby");
        ruby.textContent = "漢字";
        var rt = document.createElement("rt");
        rt.textContent = "かんじ";
        ruby.appendChild(rt);

        range = editorSel.getRangeAt(0);
        console.log(range.startContainer);
        console.log(range.startContainer.parentNode);
        console.log(range.startContainer.parentNode.nodeName);
        console.log(range.startContainer.parentNode.id);
        if ('editor' !== range.startContainer.parentNode.id) { return; }

        range.insertNode(ruby);

        /*
        editorRange.setStart(target, 0);
        editorRange.collapse(true);
        editorRange.collapse(true);
        editorSel.removeAllRanges();
        */
        /*
        editorRange.setStart(node, 0);
        editorRange.collapse(true);
        editorSel.removeAllRanges();
        editorSel.addRange(editorRange);
        */
    //    console.log(pos);
    });
});
