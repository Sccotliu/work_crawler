﻿/**
 * 批量下載小説家になろう/小説を読もう！的工具。 Download syosetu.com novels.
 */

'use strict';

require('./work_crawler_loder.js');

// ----------------------------------------------------------------------------

CeL.run('application.net.work_crawler.yomou');

// ----------------------------------------------------------------------------

// CeL.set_debug(3);

CeL.yomou().start(work_id);
