import React, { PureComponent } from 'react';

export interface InjectedGitHubButtonProps {
  label: string;
  labelDescription: string;
  onClick: () => void;
  icon?: JSX.Element;
  interactions?: number;
  interactionsDescription?: string;
  onClickInteractions?: () => void;
  extraButtonClasses: string;
}

export class InjectedGitHubButton extends PureComponent<InjectedGitHubButtonProps> {
  public static defaultProps = {
    extraButtonClasses: '',
  };
  public render() {
    const {
      icon,
      label,
      labelDescription,
      onClick,
      interactions,
      interactionsDescription,
      onClickInteractions,
      extraButtonClasses,
    } = this.props;
    return (
      <div className="">
        <button
          className={`btn btn-sm btn-with-count js-toggler-target ${extraButtonClasses}`}
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label={labelDescription}
          title={labelDescription}
          onClick={onClick}
        >
          <span className="js-select-button">
            {icon} {label}
          </span>
        </button>
        <a
          className="social-count js-social-count"
          aria-label={interactionsDescription}
          title={interactionsDescription}
          onClick={onClickInteractions}
        >
          {interactions}
        </a>
      </div>
    );
  }
}
