(function () {
    'use strict';

    function accordion(accordionEl) {

        function handlePanelClick(evt) {
            showPanel(evt.currentTarget);
        }

        function showPanel(panel) {
            var expandedPanel = accordionEl.querySelector('.accordion-panel.active');
            if (expandedPanel) expandedPanel.classList.remove('active');
            panel.classList.add('active');
        }

        var allPanelElems = accordionEl.querySelectorAll('.accordion-panel');
        for (var i = 0, len = allPanelElems.length; i < len; i++) {
            allPanelElems[i].addEventListener('click', handlePanelClick);
        }

        showPanel(allPanelElems[0]);

    }

    accordion(document.querySelector('.accordion'));
}());