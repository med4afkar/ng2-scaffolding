import os
animations = 'node_modules/@angular/animations'
platform_browser = 'node_modules/@angular/platform-browser'
cdk = 'node_modules/@angular/cdk'
common = 'node_modules/@angular/common'
core = 'node_modules/@angular/core'
primeng = 'node_modules/primeng'

for root in [animations, platform_browser, cdk, common, core, primeng]:
    for subdir, dirs, files in os.walk(root):
        print(subdir)
        # if subdir includes esm2015 or esm5 then skip it
        if 'esm2015' in subdir or 'esm5' in subdir or 'fesm2015' in subdir or 'fesm5' in subdir or 'esm2020' in subdir or 'fesm2020' in subdir or 'testing' in subdir:
            continue
        else:
            hasPackageJson = False
            for file in files:
                if file == 'package.json':
                    hasPackageJson = True
                    break
            if hasPackageJson:
                print('found package.json')
                # read package.json
                # remove main
                # write package.json
                # print(os.path.join(subdir, file))
            else:
                print('no package.json')
                # create package.json file in this folder
                f = open(os.path.join(subdir, 'package.json'), 'w')
                if('primeng' in subdir):
                    f.write('{"module": "../fesm2015/primeng-' + subdir.split('/')[-1] +'.mjs", "sideEffects": false}')
                else:
                    f.write('{"module": "../fesm2015/' + subdir.split('/')[-1] +'.mjs"}')

