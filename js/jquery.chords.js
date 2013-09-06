recursivelyWrapTextNodes = function($node) {
    $node.contents().each(function() {
        var $this = $(this);
        if (this.nodeType === 3) { //Node.TEXT_NODE (IE...)
            var spans = $.each($this.text().split(""), function(index, element) {
                var $span = $("<div></div>");
                $span.text(element);
                $span.insertBefore($this);
            });
            $this.remove();
        }
        else if (this.nodeType === 1) //Node.ELEMENT_NODE
        recursivelyWrapTextNodes($this);
    });
};
