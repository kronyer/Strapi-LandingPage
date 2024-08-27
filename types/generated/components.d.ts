import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionTextGrid extends Schema.Component {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text-grid';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface SectionSectionTwoColumns extends Schema.Component {
  collectionName: 'components_section_section_two_columns';
  info: {
    displayName: 'section_two_columns';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    metadata: Attribute.Component<'section.section-metadata'>;
  };
}

export interface SectionSectionMetadata extends Schema.Component {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    section_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'section_grid';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    text_grid: Attribute.Component<'section.text-grid', true>;
    image_grid: Attribute.Component<'section.image-grid', true>;
    metadata: Attribute.Component<'section.section-metadata'>;
  };
}

export interface SectionSectionContent extends Schema.Component {
  collectionName: 'components_section_section_contents';
  info: {
    displayName: 'section_content';
    icon: 'chartPie';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    metadata: Attribute.Component<'section.section-metadata', true>;
  };
}

export interface SectionImageGrid extends Schema.Component {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'Image-grid';
    icon: 'clock';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
    icon: 'book';
    description: '';
  };
  attributes: {
    logo_link: Attribute.Text & Attribute.Required;
    logo_text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    logo: Attribute.Media<'images'>;
    menu_links: Attribute.Component<'menu.menu-link', true> &
      Attribute.Required;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menu_link';
    icon: 'code';
  };
  attributes: {
    link_text: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
    open_in_new_tab: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.text-grid': SectionTextGrid;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-grid': SectionSectionGrid;
      'section.section-content': SectionSectionContent;
      'section.image-grid': SectionImageGrid;
      'menu.menu': MenuMenu;
      'menu.menu-link': MenuMenuLink;
    }
  }
}
