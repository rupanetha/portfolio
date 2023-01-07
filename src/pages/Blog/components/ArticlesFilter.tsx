import { Box, Text, useMediaQuery, Select } from '@chakra-ui/react';

export default function ArticlesFilter({
  articlesFilter,
  setArticlesFilter,
  categories,
}: any) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  function handleFilterClick(slug: string | null) {
    if (articlesFilter !== slug) {
      setArticlesFilter(slug);
    }
  }

  if (!isLargerThan768) {
    return (
      <Box w='100%' px='24px' gap='46px' mt='66px' display={'flex'}>
        <Select
          onChange={(evt) => {
            if (evt.target.value === 'all') {
              handleFilterClick('all');
            } else {
              handleFilterClick(evt.target.value);
            }
          }}
          placeholder='Select option'
        >
          <option selected value={'all'}>
            All
          </option>
          {categories &&
            categories.map((item: any) => (
              <option value={item.attributes.slug}>
                {item.attributes.name}
              </option>
            ))}
        </Select>
      </Box>
    );
  }
  return (
    <Box gap='46px' mt='66px' display={'flex'}>
      <Text
        onClick={() => handleFilterClick('all')}
        fontWeight={articlesFilter === 'all' ? '700' : '500'}
        cursor='pointer'
      >
        ALL
      </Text>
      {categories &&
        categories.map((item: any) => (
          <Text
            textTransform={'uppercase'}
            onClick={() => handleFilterClick(item.attributes.slug)}
            fontWeight={articlesFilter === item.attributes.slug ? '700' : '500'}
            cursor='pointer'
          >
            {item.attributes.name}
          </Text>
        ))}
    </Box>
  );
}
