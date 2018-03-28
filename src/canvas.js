                const ctx = $('#canvas').get(0).getContext('2d');
                const unit = 250.0 / 6;

                const $x_fld = $('#form\\:x-spinner_input');
                const $y_fld = $('#form\\:y-fld');
                const $radius_fld = $('#form\\:radius-fld');
                const $slider = $('#form\\:radius-slider');
                const $check_btn = $('#form\\:check');
                const $recheck_btn = $('#form\\:recheck');
                const $canvas = $('#canvas');

                $(document).ready(function () {
                    $slider.slider({
                        step: 0.1
                    });
                    $slider.on('slidestop', function () {
                        render_basis();
                        render_points();

                        $recheck_btn.click();
                    });
                    $canvas.on('click', function (e) {
                        $x_fld.val(x_to_normal(e.pageX - $canvas.get(0).offsetLeft).toFixed(3));
                        $y_fld.val(y_to_normal(e.pageY - $canvas.get(0).offsetTop).toFixed(3));

                        $check_btn.click();
                    });

                    render_basis();
                    $recheck_btn.click();

                    const $spinner_fld = $('#form\\:x-spinner_input');
                    const font_size = $spinner_fld.css('font-size');
                    $y_fld.css('font-size', font_size);
                    $y_fld.css('width', $spinner_fld.css('width'));
                    $y_fld.css('height', $spinner_fld.css('height'));
                    $check_btn.css('font-size', font_size);
                });

                function ajax_callback(data) {
                    if(data.status === 'success') {
                        render_basis();
                        render_points();
                    }
                }

                function x_to_canvas(normal) {
                    return 250 + normal * unit;
                }

                function y_to_canvas(normal) {
                    return 250 - normal * unit;
                }

                function x_to_normal(canvas) {
                    return (canvas - 250) / unit;
                }

                function y_to_normal(canvas) {
                    return (250 - canvas) / unit;
                }

                function render_basis() {
                    ctx.fillStyle = '#fff';
                    ctx.fillRect(0, 0, 500, 500);

                    const radius = parseFloat($radius_fld.val());
                    ctx.fillStyle = '#00f';

                    ctx.beginPath();
                    ctx.moveTo(250, 250);
                    ctx.lineTo(x_to_canvas(-radius), 250);
                    ctx.lineTo(250, y_to_canvas(radius));
                    ctx.lineTo(250, 250);
                    ctx.lineTo(x_to_canvas(radius), 250);
                    ctx.lineTo(x_to_canvas(radius), y_to_canvas(-radius));
                    ctx.lineTo(250, y_to_canvas(-radius));
                    ctx.lineTo(250, 250);
                    ctx.arc(250, 250, radius * unit / 2, 0.5 * Math.PI, Math.PI, false);
                    ctx.fill();

                    ctx.strokeStyle = '#000';

                    ctx.beginPath();
                    ctx.moveTo(0, 250);
                    ctx.lineTo(500, 250);
                    ctx.stroke();

                    var i;
                    for(i = -5; 5 >= i; i++) {
                        const cur_x = x_to_canvas(i);

                        ctx.beginPath();
                        ctx.moveTo(cur_x, 245);
                        ctx.lineTo(cur_x, 255);
                        ctx.stroke();
                    }

                    ctx.beginPath();
                    ctx.moveTo(250, 0);
                    ctx.lineTo(250, 500);
                    ctx.stroke();

                    for(i = -5; 5 >= i; i++) {
                        const cur_y = y_to_canvas(i);

                        ctx.beginPath();
                        ctx.moveTo(245, cur_y);
                        ctx.lineTo(255, cur_y);
                        ctx.stroke();
                    }
                }
                
                function render_points() {
                    const table = $('#form\\:result_table').get(0);

                    var row;
                    for(var i = 1; row = table.rows[i]; i++) {
                        const x = x_to_canvas(parseFloat(row.cells[0].innerHTML));
                        const y = y_to_canvas(parseFloat(row.cells[1].innerHTML));

                        if(isNaN(x)) return;
                        if(row.cells[2].innerText === 'true') ctx.fillStyle = '#0f0';
                        else ctx.fillStyle = '#f00';

                        ctx.beginPath();
                        ctx.arc(x, y, 5, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                }