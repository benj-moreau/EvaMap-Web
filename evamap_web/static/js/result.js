var result = new Vue({
    el: '#result',
    data: {
        total_result: total_score,
        detailed_results: detailed_result
    },
    methods: {
        get_color: function(score) {
            score = score * 100;
            if (score >= 80) {
                return '#00c7b1';
            } else if (score >= 40) {
                return '#efb71b';
            }
            return '#ce0037';
        },
        get_icon: function(dimension_name) {
            switch (dimension_name) {
                case 'Connectability':
                    return 'fab fa-connectdevelop';
                case 'Clarity':
                    return 'fas fa-glasses';
                case 'Consistency':
                    return 'fas fa-brain';
                case 'Availability':
                    return 'far fa-handshake';
                case 'Conciseness':
                    return 'fas fa-compress-arrows-alt';
                case 'Coverability':
                    return 'fas fa-table';
                default:
                    return 'fas fa-star';
            }
        }
    }
});