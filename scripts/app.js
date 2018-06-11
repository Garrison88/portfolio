function scrollToSection(sectionName) {
    $(`#nav-${sectionName}`).on('click', function (e) {
        e.preventDefault();
        $("html, body")
            .animate({scrollTop: $(`#section-${sectionName}`)
            .offset()
            .top }, 500);
    });
};

scrollToSection('header');
scrollToSection('portfolio');
scrollToSection('about');
scrollToSection('contact');