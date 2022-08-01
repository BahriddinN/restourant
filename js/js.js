
                      
                          mobiscroll.setOptions({
                              locale: mobiscroll.localeEn,  // Specify language like: locale: mobiscroll.localePl or omit setting to use default
                              theme: 'ios',                 // Specify theme like: theme: 'ios' or omit setting to use default
                              themeVariant: 'light'         // More info about themeVariant: https://docs.mobiscroll.com/5-17-2/javascript/datetime#opt-themeVariant
                          });
                          
                          mobiscroll.datepicker('#demo-one-input', {
                              controls: ['date'],
                              showRangeLabels: true,
                              display: 'anchored'           // Specify display mode like: display: 'bottom' or omit setting to use default
                          });
                          
                          mobiscroll.datepicker('#demo-init-inline', {
                              controls: ['date'],
                              showRangeLabels: true,
                              display: 'inline'             // Specify display mode like: display: 'bottom' or omit setting to use default
                          });
                   