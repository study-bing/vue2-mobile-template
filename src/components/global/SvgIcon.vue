<template>
    <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" title="" />
    <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners" :style="styleObject" title="">
        <use :href="iconName" />
    </svg>
</template>

<script>
export default {
    name: 'svgIcon',
    props: {
        iconClass: {
            type: String,
            required: true,
        },
        className: {
            type: [String, Array, Object],
            default: '',
        },
        width: {
            type: [Number, String],
            default: 22,
        },
        height: {
            type: [Number, String],
            default: 22,
        },
        readOnly: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isExternal() {
            return /^(https?:|mailto:|tel:)/.test(this.iconClass)
        },
        iconName() {
            return `#icon-${this.iconClass}`
        },
        svgClass() {
            let initCss = 'svg-icon '
            if (this.readOnly) {
                initCss += 'readOnly '
            }
            if (this.className) {
                initCss += this.className
            }
            return initCss
        },
        styleExternalIcon() {
            return {
                mask: `url(${this.iconClass}) no-repeat 50% 50%`,
                '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`,
            }
        },
        styleObject() {
            return `width:${this.width}px;height:${this.height}px;`
        },
    },
}
</script>

<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.26em;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
    flex-shrink: 0;
}

.svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
}
.readOnly {
    cursor: initial;
}
</style>
