window.addEventListener('load', (event) => {
    document.addEventListener('keydown', (event)=>{
//    document.querySelector('#editor').addEventListener('keydown', (event)=>{
//        if (event.ctrlKey && event.shiftKey && event.key == 'r') {
//        if (event.altKey && event.key == 'r') {
        console.log('', event.ctrlKey);
        console.log('', event.shiftKey);
        console.log('', event.altKey);
        console.log('', event.metaKey);
        if (event.altKey && event.key == 'r') {
            const selected = getRubyTarget();
            console.log(selected);
            if (selected && selected.target) {
//                console.log(selected.target.startContainer);
//                const rt_txt = window.prompt(`「${target.startContainer}」のルビは？`, '');

                const rt_txt = window.prompt(`「${selected.ruby_txt}」のルビは？`, '');
                if ('' == rt_txt) { return; }
//                const rt_txt = 'XXXXXXX';

                console.log(selected.ruby_txt);
                console.log(rt_txt);
//                range.insertNode(createRubyElement(target.startContainer, rt_txt));
                const elm = createRubyElement(selected.ruby_txt, rt_txt);
                console.log(elm);
                selected.target.deleteContents();
                selected.target.insertNode(elm);
            }
        }
    });
    // キャレットで選択した範囲を返す
    function getRubyTarget() {
        const target = document.querySelector('#editor');
        const editorRange = document.createRange();
        const editorSel = window.getSelection();
        console.log('editorSel', editorSel);
        console.log('editorSel.text', editorSel.text);
        console.log('editorSel.toString()', editorSel.toString());

        const range = editorSel.getRangeAt(0);
        console.log(range.startContainer);
        console.log(range.startContainer.parentNode);
        console.log(range.startContainer.parentNode.nodeName);
        console.log(range.startContainer.parentNode.id);
        if ('editor' !== range.startContainer.parentNode.id) { return null; }

//        return range;
//        return editorSel.toString(), range;
        return {ruby_txt: editorSel.toString(), target: range};

    }
    // ruby要素を返す
    function createRubyElement(ruby_txt, rt_txt) {
        const ruby = document.createElement("ruby");
        ruby.textContent = ruby_txt;//"漢字";
        const rt = document.createElement("rt");
        rt.textContent = rt_txt;//"かんじ";
        ruby.appendChild(rt);
        return ruby;
    }
    /*
    document.querySelector('#editor').addEventListener("input",function(){
        console.log("input");
    });
    */
/*
//    document.addEventListener('selectionchange', ()=>{
    document.querySelector('#editor').addEventListener('selectionchange', ()=>{
        const target = document.querySelector('#editor');
        const editorRange = document.createRange();
        const editorSel = window.getSelection();
        console.log('editorSel', editorSel);
        console.log('editorSel.text', editorSel.text);
        console.log('editorSel.toString()', editorSel.toString());

        const range = editorSel.getRangeAt(0);
        console.log(range.startContainer);
        console.log(range.startContainer.parentNode);
        console.log(range.startContainer.parentNode.nodeName);
        console.log(range.startContainer.parentNode.id);
        if ('editor' !== range.startContainer.parentNode.id) { return null; }

        const ruby = document.createElement("ruby");
        ruby.textContent = "漢字";
        const rt = document.createElement("rt");
        rt.textContent = "かんじ";
        ruby.appendChild(rt);
        range.insertNode(ruby);


    });
    */
    /*
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
    });
    */
});
