import { NAVER_WEBTOON_URL } from '.';
import { getHtmlData } from './getHtmlData';
import { Webtoon, Singularity } from '../../types';

export async function crawlNaverWebtoons(
  type: 'weekday' | 'finish',
  query: string,
  updateDays: Webtoon['updateDays'],
  commonSingularityList: Singularity[] = [],
) {
  const $ = await getHtmlData(
    `${NAVER_WEBTOON_URL}/webtoon/${type}.nhn?${query}`,
  );

  const rootElement = $('#ct > div.section_list_toon > ul > li > a');

  return rootElement
    .map((_, element) => {
      const badgeAreaText = $(element).find('span.area_badge').text();

      const isNewWebtoon = badgeAreaText.includes('신작');
      const isAdultWebtoon = badgeAreaText.includes('청유물');

      const singularityList = [...commonSingularityList];
      const isWaitFreeWebtoon = badgeAreaText.includes('유료작품');
      if (isWaitFreeWebtoon) {
        singularityList.push(Singularity.WAIT_FREE);
      }

      const titleBoxText = $(element).find('div.title_box').text();
      const isPausedWebtoon = titleBoxText.includes('휴재');
      const isUpdatedWebtoon = titleBoxText.includes('업데이트');

      const fanCountText = $(element)
        .find('div.info > span.favcount > span.count_num')
        .text();

      const fanCount = fanCountText.includes('만')
        ? Number(fanCountText.replace('만', ''))
        : fanCountText.includes('억')
        ? Number(fanCountText.replace('억', '')) * 10000
        : null;

      const webtoon: Webtoon = {
        title: $(element).find('.title').text(),

        author: $(element)
          .find('.author')
          .text()
          .replaceAll(' / ', ',')
          .replaceAll('\n', '')
          .replaceAll('\t', ''),

        url: NAVER_WEBTOON_URL + $(element).attr('href'),

        img: $(element).find('div.thumbnail > img').attr('src') || '',

        service: 'naver',
        fanCount,
        updateDays,
        additional: {
          new: isNewWebtoon,
          adult: isAdultWebtoon,
          rest: isPausedWebtoon,
          up: isUpdatedWebtoon,
          singularityList,
        },
      };

      return webtoon;
    })
    .get();
}