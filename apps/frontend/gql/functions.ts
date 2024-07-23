import { gql, type GraphQLClient } from 'graphql-request'
import type * as Types from './graphql'


export function getContentType(client: GraphQLClient, variables: Types.getContentTypeQueryVariables) : Promise<Types.getContentTypeQuery>
{
  const query = gql`query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: _Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { _metadata { types } } } }`
  return client.request<Types.getContentTypeQuery, Types.getContentTypeQueryVariables>(query, variables)
}
export function getContentByPath(client: GraphQLClient, variables: Types.getContentByPathQueryVariables) : Promise<Types.getContentByPathQuery>
{
  const query = gql`query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) { content: _Content( where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}} locale: $locale ) { total items { ...PageData } } } fragment PageData on _IContent { ...IContentData ...BlogPostPageData ...LandingPageData ...StandardPageData ...StartPageData } fragment IContentData on _IContent { _metadata { ...IContentInfo } _type: __typename } fragment BlogPostPageData on BlogPostPage { blogTitle: Heading readingTime: ReadingTime blogSubtitle: ArticleSubHeading blogImage: BlogPostPromoImage { ...ReferenceData } blogBody: BlogPostBody { json } blogAuthor: ArticleAuthor } fragment LandingPageData on LandingPage { TopContentArea { ...BlockData } MainContentArea { ...BlockData } } fragment StandardPageData on StandardPage { sptitle: StandardPageHeading spsubtitle: StandardSubHeading spimage: StandardPromoImage { ...ReferenceData } spdescription: MainBody { json } } fragment StartPageData on StartPage { HomePageHeroContentArea { ...BlockData } HomePageMainContentArea { ...BlockData } } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } } fragment LinkData on ContentUrl { base hierarchical default } fragment ReferenceData on ContentReference { key url { ...LinkData } } fragment BlockData on _IContent { ...IContentData ...BlogListingBlockData ...CardBlockData ...CarouselBlockData ...LayoutContainerBlockData ...HomeHeroBlockData ...HeroBlockData ...OdpEmbedBlockData ...QuoteBlockData ...TextBlockData } fragment BlogListingBlockData on BlogListingBlock { _metadata { name: displayName } showFilters: BlogListingShowFilters selectedPageSize: BlogListingItemCount } fragment CardBlockData on CardBlock { cardButton: CardButton { className: ButtonClass children: ButtonText buttonType: ButtonType url: ButtonUrl { ...LinkData } buttonVariant: ButtonVariant } cardColor: CardColor cardDescription: CardDescription { json html } cardHeading: CardHeading cardIcon: CardIcon { ...ReferenceData } cardImage: CardImage { ...ReferenceData } cardSubheading: CardSubHeading cardImageLayout: ImageLayout } fragment CarouselBlockData on CarouselBlock { CarouselItemsContentArea { ...IContentListItem } } fragment LayoutContainerBlockData on LayoutContainerBlock { columns: ColumnsCount containerColor: ContainerBackgroundColor backgroundImage: ContainerBackgroundImage { ...ReferenceData } marginBottom: ContainerMarginBottom marginTop: ContainerMarginTop paddingBottom: ContainerPaddingBottom paddingTop: ContainerPaddingTop gap: GapSize LayoutContentArea { ...IContentListItem } } fragment HomeHeroBlockData on HomePageHeroBlock { homeHeroHeading: HomeHeroBlockHeading homeHeroSubheading: HomeHeroBlockSubHeading homeHeroButton: HomeHeroButtonBlock { className: ButtonClass children: ButtonText buttonType: ButtonType url: ButtonUrl { ...LinkData } buttonVariant: ButtonVariant } leftImage: HomeHeroLeftImage { ...ReferenceData } rightImage: HomeHeroRightImage { ...ReferenceData } } fragment HeroBlockData on HeroBlock { heroHeading: Heading heroSubheading: SubHeading heroButton: HeroButton { className: ButtonClass children: ButtonText buttonType: ButtonType url: ButtonUrl { ...LinkData } buttonVariant: ButtonVariant } heroColor: HeroColor heroDescription: Description { html json } eyebrow: Eyebrow heroImage: HeroImage { ...ReferenceData } } fragment OdpEmbedBlockData on OdpEmbedBlock { ContentId } fragment QuoteBlockData on QuoteBlock { quote: QuoteText color: QuoteColor active: QuoteActive name: QuoteProfileName profilePicture: QuoteProfilePicture { ...ReferenceData } location: QuoteProfileLocation } fragment TextBlockData on TextBlock { overline: TextBlockOverline headingSize: TextBlockHeadingSize heading: TextBlockHeading description: TextBlockDescription { json html } center: TextCenter width: TextBlockWidth className: TextClassName } fragment IContentListItem on _IContent { ...IContentData }`
  return client.request<Types.getContentByPathQuery, Types.getContentByPathQueryVariables>(query, variables)
}
export function getContentById(client: GraphQLClient, variables: Types.getContentByIdQueryVariables) : Promise<Types.getContentByIdQuery>
{
  const query = gql`query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: _Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { ...BlockData ...PageData } } } fragment PageData on _IContent { ...IContentData ...BlogPostPageData ...LandingPageData ...StandardPageData ...StartPageData } fragment BlockData on _IContent { ...IContentData ...BlogListingBlockData ...CardBlockData ...CarouselBlockData ...LayoutContainerBlockData ...HomeHeroBlockData ...HeroBlockData ...OdpEmbedBlockData ...QuoteBlockData ...TextBlockData } fragment IContentData on _IContent { _metadata { ...IContentInfo } _type: __typename } fragment BlogPostPageData on BlogPostPage { blogTitle: Heading readingTime: ReadingTime blogSubtitle: ArticleSubHeading blogImage: BlogPostPromoImage { ...ReferenceData } blogBody: BlogPostBody { json } blogAuthor: ArticleAuthor } fragment LandingPageData on LandingPage { TopContentArea { ...BlockData } MainContentArea { ...BlockData } } fragment StandardPageData on StandardPage { sptitle: StandardPageHeading spsubtitle: StandardSubHeading spimage: StandardPromoImage { ...ReferenceData } spdescription: MainBody { json } } fragment StartPageData on StartPage { HomePageHeroContentArea { ...BlockData } HomePageMainContentArea { ...BlockData } } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } } fragment LinkData on ContentUrl { base hierarchical default } fragment ReferenceData on ContentReference { key url { ...LinkData } } fragment BlogListingBlockData on BlogListingBlock { _metadata { name: displayName } showFilters: BlogListingShowFilters selectedPageSize: BlogListingItemCount } fragment CardBlockData on CardBlock { cardButton: CardButton { className: ButtonClass children: ButtonText buttonType: ButtonType url: ButtonUrl { ...LinkData } buttonVariant: ButtonVariant } cardColor: CardColor cardDescription: CardDescription { json html } cardHeading: CardHeading cardIcon: CardIcon { ...ReferenceData } cardImage: CardImage { ...ReferenceData } cardSubheading: CardSubHeading cardImageLayout: ImageLayout } fragment CarouselBlockData on CarouselBlock { CarouselItemsContentArea { ...IContentListItem } } fragment LayoutContainerBlockData on LayoutContainerBlock { columns: ColumnsCount containerColor: ContainerBackgroundColor backgroundImage: ContainerBackgroundImage { ...ReferenceData } marginBottom: ContainerMarginBottom marginTop: ContainerMarginTop paddingBottom: ContainerPaddingBottom paddingTop: ContainerPaddingTop gap: GapSize LayoutContentArea { ...IContentListItem } } fragment HomeHeroBlockData on HomePageHeroBlock { homeHeroHeading: HomeHeroBlockHeading homeHeroSubheading: HomeHeroBlockSubHeading homeHeroButton: HomeHeroButtonBlock { className: ButtonClass children: ButtonText buttonType: ButtonType url: ButtonUrl { ...LinkData } buttonVariant: ButtonVariant } leftImage: HomeHeroLeftImage { ...ReferenceData } rightImage: HomeHeroRightImage { ...ReferenceData } } fragment HeroBlockData on HeroBlock { heroHeading: Heading heroSubheading: SubHeading heroButton: HeroButton { className: ButtonClass children: ButtonText buttonType: ButtonType url: ButtonUrl { ...LinkData } buttonVariant: ButtonVariant } heroColor: HeroColor heroDescription: Description { html json } eyebrow: Eyebrow heroImage: HeroImage { ...ReferenceData } } fragment OdpEmbedBlockData on OdpEmbedBlock { ContentId } fragment QuoteBlockData on QuoteBlock { quote: QuoteText color: QuoteColor active: QuoteActive name: QuoteProfileName profilePicture: QuoteProfilePicture { ...ReferenceData } location: QuoteProfileLocation } fragment TextBlockData on TextBlock { overline: TextBlockOverline headingSize: TextBlockHeadingSize heading: TextBlockHeading description: TextBlockDescription { json html } center: TextCenter width: TextBlockWidth className: TextClassName } fragment IContentListItem on _IContent { ...IContentData }`
  return client.request<Types.getContentByIdQuery, Types.getContentByIdQueryVariables>(query, variables)
}

