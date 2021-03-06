window.addEventListener('load', (event) => {
    document.addEventListener('keydown', (event)=>{
//    document.querySelector('#editor').addEventListener('keydown', (event)=>{
        if (event.altKey && event.key == 'r') { // ctrlKey, shiftKey, altKey, metaKey
            const selected = getRubyTarget();
            console.log(selected);
            if (selected && selected.target) {
                const rt_txt = window.prompt(`「${selected.ruby_txt}」のルビは？`, '');
                if ('' == rt_txt) { return; }

                // ruby要素をつくって挿入する
                console.log(selected.ruby_txt);
                console.log(rt_txt);
                const elm = createRubyElement(selected.ruby_txt, rt_txt);
                console.log(elm);
                selected.target.deleteContents(); // 最初のコンテンツ削除
                selected.target.insertNode(elm); // rubyタグ追加

                // 文字列選択を解除する
                var range = document.createRange();
                var sel = window.getSelection();
                range.collapse(true);
                range.setStart(document.querySelector('#editor'), 2); // 第二引数=1なら先頭、2なら末尾
                sel.removeAllRanges();
                sel.addRange(range);
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
        console.log(range.startContainer.parentNode);
        console.log(range.endContainer);
        if ('editor' !== range.startContainer.parentNode.id) { return null; }

        // 選択した文字列、選択した範囲、の２つを返す
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
    document.querySelector('#editor').addEventListener('selectionchange', ()=>{
    });
    */
});
